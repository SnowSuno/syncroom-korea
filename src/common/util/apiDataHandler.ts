import { RoomData } from "../api/syncroom";
import IRoom from "../classes/Room";
import { Country, CountryType, Inst, InstType, Status, StatusType } from "../classes/properties";
import { MemberType } from "../classes/Member";
import { tagMaskDecoder } from "./tagMaskDecoder";

const korean: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const japanese: RegExp = /[ぁ-んァ-ン一-龯]/;

const instMap: { [index: string]: InstType } = {
    "-1": Inst.OTHER,
    "0": Inst.DRUMS,
    "1": Inst.DRUMS,
    "2": Inst.BASS,
    "3": Inst.GUITAR,
    "4": Inst.GUITAR,
    "5": Inst.KEYS,
    "6": Inst.KEYS,
    "7": Inst.OTHER,
    "8": Inst.OTHER,
    "9": Inst.OTHER,
    "10": Inst.OTHER,
    "11": Inst.OTHER,
    "12": Inst.VOCAL,
    "13": Inst.OTHER,
};

interface returnType {
    rooms: IRoom[];
    users: { [name: string]: number };
}

const apiDataHandler = (roomsData: RoomData[]): returnType => {
    // console.log(roomsData)
    const users: { [name: string]: number } = {};
    const rooms: IRoom[] = roomsData.map(roomData => {
        const [date, time] = roomData.createTime.split(" ");
        const id = new Date(`${date}T${time}-00:00`)
                .getTime() % 21600000 * 1000
            + parseInt(roomData.creator.nsgmMemberId);
        
        let country: CountryType = Country.OTHER;
        [
            roomData.creator.nickname,
            roomData.roomDesc,
            roomData.roomName,
        ].forEach(text => {
            if (korean.test(text)) {
                country = Country.KOREA;
            } else if (japanese.test(text)) {
                country = Country.JAPAN;
            }
        });
        
        const status: StatusType = roomData.needPasswd
            ? Status.PRIVATE
            : Status.PUBLIC;
        
        const members: MemberType[] = roomData.members.map(member => {
            if (member.nickname) users[member.nickname] = id;
            
            return {
                type: !!member.nickname ? "general" : "temp",
                nickname: member.nickname,
                icon: "type" in member.iconInfo
                    ? member.iconInfo.type === "preset"
                        ? member.iconInfo.preset
                        : member.iconInfo.url
                    : "-1",
                inst: "type" in member.iconInfo
                    ? instMap[member.iconInfo.preset]
                    : Inst.OTHER,
            };
        });
        
        const tags = tagMaskDecoder(roomData.tagMask, roomData.tagOrig);
        
        return {
            name: roomData.roomName,
            id: id,
            desc: roomData.roomDesc,
            members: members,
            country: country,
            status: status,
            tags: tags,
        };
    });
    console.log(rooms)
    return { rooms, users };
};

export default apiDataHandler;

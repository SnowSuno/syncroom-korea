import {RoomData} from "../api/syncroom";
import RoomType from "../classes/Room";
import {Country, CountryType, Inst, InstType, Status, StatusType} from "../classes/properties";
import {MemberType, MemberTypeType, PrivateMember} from "../classes/Member";
import {tagMaskDecoder} from "./tagMaskDecoder";


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
    "13": Inst.OTHER
};

interface returnType {
    rooms: RoomType[];
    users: { [name: string]: number };
}

const apiDataHandler = (roomsData: RoomData[]): returnType => {
    const users: { [name: string]: number } = {};
    const rooms: RoomType[] = roomsData.map(roomData => {
        const [date, time] = roomData.create_time.split(' ');
        const id = new Date(`${date}T${time}-00:00`)
                .getTime() % 21600000 * 1000
            + parseInt(roomData.creator_mid);

        let country: CountryType = Country.OTHER;
        [
            roomData.creator_nick,
            roomData.room_desc,
            roomData.room_name
        ].forEach(text => {
            if (korean.test(text)) {
                country = Country.KOREA;
            } else if (japanese.test(text)) {
                country = Country.JAPAN;
            }
        });

        const status: StatusType = roomData.need_passwd
            ? Status.PRIVATE
            : Status.PUBLIC;

        const members: MemberType[] = Array.from(
            {length: roomData.num_members}, (_, i) => {
                const member = roomData.members[i];
                
                if (!member) {
                    return PrivateMember;
                }
                
                const iconData = roomData?.iconlist?.[i];
                
                users[member.trim()] = id;

                const [type, nickname]: [MemberTypeType, string] = member
                    ? ["general", member.trim()]
                    : ["temp", "임시 참여 중"];
                
                const iconKey = iconData?.icon || "-1";
                const iconURL = iconData?.iconurl;
                
                const icon: string = member ? (iconURL || iconKey) : "-1";
                const inst: InstType = iconURL
                    ? Inst.OTHER
                    : instMap[iconKey];
                return {type, nickname, icon, inst}
            }
        )

        const tags = tagMaskDecoder(roomData.tag_mask, roomData.tag_orig);

        return {
            name: roomData.room_name,
            id: id,
            desc: roomData.room_desc,
            members: members,
            country: country,
            status: status,
            tags: tags,
        }
    });
    return {rooms, users};
}

export default apiDataHandler;

import {RoomData} from "../api/syncroom";
import RoomType from "../classes/Room";
import {Country, CountryType, Inst, InstType, Status, StatusType} from "../classes/properties";
import {MemberType, PrivateMember} from "../classes/Member";


const korean: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const japanese: RegExp = /[ぁ-んァ-ン一-龯]/;

const instMap: {[index: string]: InstType} = {
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
    users: string[];
}

const apiDataHandler = (roomsData: RoomData[]):returnType => {
    const users: string[] = [];
    const rooms: RoomType[] = roomsData.map(roomData => {
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
                    try {
                        const member = roomData.members[i];
                        if (member) users.push(member);
                        const nickname: string = member || "임시 참여 중";
                        const {icon: iconkey, iconurl} = roomData.iconlist[i];
                        const icon: string = iconurl || iconkey;
                        const inst: InstType = iconurl
                            ? Inst.OTHER
                            : instMap[iconkey];
                        return {nickname, icon, inst};
                    } catch (e) {
                        return PrivateMember;
                    }
                }
            )
            return {
                name: roomData.room_name,
                desc: roomData.room_desc,
                members: members,
                country: country,
                status: status
            }
        }
    )
    return {rooms, users};
}

export default apiDataHandler;
// const a = new Date("2021-07-10 07:05:44 GMT").getTime();
// console.log(a);

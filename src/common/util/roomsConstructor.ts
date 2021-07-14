import {RoomData} from "../api/syncroom";
import Room from "../classes/Room";
import {Country, CountryType, Inst, InstType, Status, StatusType} from "../classes/types";
import {Member, PrivateMember} from "../classes/Member";


const korean: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
const japanese: RegExp = /[ぁ-んァ-ン一-龯]/;



// const getInst = (icon: number): InstType => {
//
// }


const RoomsConstructor = (roomsData: RoomData[]):Room[] => {
    return roomsData.map(roomData => {
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

            const members: Member[] = Array.from(
                {length: roomData.num_members}, (_, i) => {
                    if (i >= roomData.members.length) {
                        return PrivateMember;
                    } else {
                        const {icon: iconStr, iconurl} = roomData.iconlist[i];
                        const icon: string | number = iconurl
                            ? iconurl
                            : parseInt(iconStr);

                        return {
                            nickname: roomData.members[i],
                            icon: icon,
                            inst: Inst.BASS
                        };
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
}

export default RoomsConstructor;
// const a = new Date("2021-07-10 07:05:44 GMT").getTime();
// console.log(a);

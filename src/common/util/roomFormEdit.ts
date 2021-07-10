interface icon {
    icon: string,
    iconurl: string
}

interface rawRoom {
    index: number,
    room_name: string,
    room_desc: string,
    need_passwd: boolean,
    create_time: string,
    creator_mid: string,
    creator_nick: string,
    creator_icon: icon,
    num_members: number,
    members: string[],
    iconlist: icon[],
}


const roomFormEdit = (rawRoomData: rawRoom[]) => {
    rawRoomData.map(rawRoom => {

        // const {
        //     room_name,
        //     room_desc,
        //     num_members,
        //     members,
        //     iconlist,
        //     need_passwd,
        //     create_time
        // } = rawRoom;




        }
    )
}

export default roomFormEdit;
// const a = new Date("2021-07-10 07:05:44 GMT").getTime();
// console.log(a);

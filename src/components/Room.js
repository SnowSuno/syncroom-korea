import React from "react";
import PropTypes from "prop-types";
import "./Room.css";

import RoomHeader from "./RoomHeader";
import RoomMembers from "./RoomMembers";

import makeJoinURI from "../util/makeJoinURI"
import shareLink from "../util/shareLink";

function Room(room) {
    const joinURI = makeJoinURI(room.room_name, "", 4, 2);
    const joinTestURI = makeJoinURI(room.room_name, "", 4, 3);

    const link = shareLink.encode([room.room_name]);

    const checkCountry = ({ room_name, room_desc, creator_nick }) => {
        const korean = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
        const japanese = /[ぁ-んァ-ン一-龯]/;

        const searchStrings = [creator_nick, room_desc, room_name];
        let country = '-';

        searchStrings.forEach(string => {
            if (korean.test(string)) {
                country = '🇰🇷';
            } else if (japanese.test(string)) {
                country = '🇯🇵'
            }
        });


        return country
    }


    return (
        <div className="room-tile">
            <RoomHeader {...room} country={checkCountry(room)}/>
            <div className="room-desc">
                <span>{
                    (room.room_desc) 
                        ? room.room_desc
                        : '방 설명이 없습니다'
                }</span>
            </div>

            <RoomMembers {...room} />
            {/*<ul>*/}
            {/*    {room.members.map((member, index) => (*/}
            {/*        <li key={index}>{member}</li>  // TODO : 비공개 유저는 members array에 포함되지 않기 때문에 num_members를 이용해 추가해줘야 함*/}
            {/*    ))}*/}
            {/*</ul>*/}

            <div className="buttons">
                <button className='share'>공유</button>
                <div className='join-buttons'>
                    <button className='temp'>임시 입장</button>
                    <button className='join'>참여하기</button>
                </div>
            </div>

                {/*<a href={joinTestURI}>임시 입장</a>*/}
                {/*{' '}*/}
                {/*<a href={joinURI}>입장</a>*/}


            {/*공유 링크:*/}
            {/*{*/}
            {/*    room.need_passwd*/}
            {/*        ? '잠긴방 링크는 나중에'*/}
            {/*        : <a href={link}>https://syncroomkr.github.io/join?{link}</a>*/}
            {/*}*/}
        </div>
    )
}


Room.propTypes = {
    create_time: PropTypes.string.isRequired,
    creator_icon: PropTypes.shape({
        icon: PropTypes.string,
        iconurl: PropTypes.string
    }),
    creator_mid: PropTypes.string.isRequired,
    creator_nick: PropTypes.string.isRequired,
    iconlist: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        iconurl: PropTypes.string
    })),
    index: PropTypes.number.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
    need_passwd: PropTypes.bool.isRequired,
    num_members: PropTypes.number.isRequired,
    room_desc: PropTypes.string,
    room_name: PropTypes.string.isRequired,
}

export default Room;

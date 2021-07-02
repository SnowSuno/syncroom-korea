import React from "react";
import "./RoomMembers.css"

function RoomMembers({ members, num_members }) {
    const MAX_MEMBERS = 5;
    const numPrivateMember = num_members - members.length;


    let memberList = members
        .concat(Array(numPrivateMember).fill('비공개 프로필'))
        .concat(Array(MAX_MEMBERS - num_members).fill(''))

    return (
        <div className='member-list'>
            {memberList.map((member_name, index) => (
                <div key={index} className='member'>
                    <span>{member_name}</span>
                </div>
            ))}
        </div>

    )
}

export default RoomMembers;
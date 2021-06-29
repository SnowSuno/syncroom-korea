/* ----------------------------------------------------------------------
 * util.js
 *
 * Copyright(C) 2014 Yamaha Corporation
 * All rights reserved.
 *
 * Modified by SnowSuno - syncroomkr.github.io
 * ---------------------------------------------------------------------- */

function makeJoinURI(room, pass, pid, mode) {
    const urienc = function(str) {
        return encodeURIComponent(str)
            .replace(/[!*'()]/g,
                function(c) {
                    return "%" + c.charCodeAt(0).toString(16);
                });
    };

    const str = `joingroup?mode=${urienc(mode)}&pid=${urienc(pid)}&nickname=&groupname=${urienc(room)}&password=${urienc(pass)}`;
    let uri = 'syncroom:';
    const tbl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let len = str.length;
    const mod = len % 3;
    if (mod > 0)
        len -= mod;

    let i, t;
    for (i = 0; i < len; i += 3) {
        t = str.charCodeAt(i) << 16 |
            str.charCodeAt(i + 1) <<  8 |
            str.charCodeAt(i + 2);
        uri += tbl.charAt(t >> 18 & 0x3F);
        uri += tbl.charAt(t >> 12 & 0x3F);
        uri += tbl.charAt(t >>  6 & 0x3F);
        uri += tbl.charAt(t       & 0x3F);
    }
    if (mod === 2) {
        t = str.charCodeAt(i) << 16 |
            str.charCodeAt(i + 1) <<  8;
        uri += tbl.charAt(t >> 18 & 0x3F);
        uri += tbl.charAt(t >> 12 & 0x3F);
        uri += tbl.charAt(t >>  6 & 0x3F);
        uri += '=';
    } else if (mod === 1) {
        t = str.charCodeAt(i) << 16;
        uri += tbl.charAt(t >> 18 & 0x3F);
        uri += tbl.charAt(t >> 12 & 0x3F);
        uri += '=';
        uri += '=';
    }

    return uri;
}

export default makeJoinURI;

//
// function escHTML(str) {
//     if(!str) return '';
//     return str.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#039;');
// }
//
// function addManualLink(target) {
//     if(!target) return;
//     const div = document.getElementById('manual_link');
//     if(!div) return;
//     div.innerHTML = '<a href="'+ target + '">'+'起動しない場合はこちらをクリック'+'</a><br>（ブラウザの裏に隠れている場合があります）';
// }
//
// function checkPW(_jsonentry, pid, mode){
//     const room_name = _jsonentry.room_name;
//     const pw_prompt = window.prompt("ルームパスワードを入力してください", "");
//     if(pw_prompt){
//         const target = makeJoinURI(room_name, pw_prompt, pid, mode);
//         setTimeout(function() { addManualLink(target); location.href = target; }, 0);
//     }
// }
//
// function openND(_jsonentry, pid, mode){
//     const room_name = _jsonentry.room_name;
//     if(window.confirm('SYNCROOMを起動し、ルームに入ります。')){
//         const target = makeJoinURI(room_name, "", pid, mode);
//         setTimeout(function() { addManualLink(target); location.href = target; }, 0);
//     }
// }
//
// const testRoomTitle = "接続テストルーム";
// const testRoomDesc  = "SYNCROOMの公式テストルームです。入室すると、音声が3秒後に返ってきますので、通信の確認をすることができます。";
//
//
// export default {checkPW, openND}

/* ----------------------------------------------------------------------
 * util.js
 *
 * Copyright(C) 2014 Yamaha Corporation
 * All rights reserved.
 *
 * Modified by SnowSuno - syncroomkr.github.io
 * ---------------------------------------------------------------------- */

const joinURI = {
    create: (room, pass, pid, mode) => {

        const urienc = function (str) {
            return encodeURIComponent(str)
                .replace(/[!*'()]/g,
                    function (c) {
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
            t = (str.charCodeAt(i) << 16) |
                (str.charCodeAt(i + 1) << 8) |
                str.charCodeAt(i + 2);
            uri += tbl.charAt((t >> 18) & 0x3F);
            uri += tbl.charAt((t >> 12) & 0x3F);
            uri += tbl.charAt((t >> 6) & 0x3F);
            uri += tbl.charAt((t) & 0x3F);
        }
        if (mod === 2) {
            t = (str.charCodeAt(i) << 16) |
                (str.charCodeAt(i + 1) << 8);
            uri += tbl.charAt((t >> 18) & 0x3F);
            uri += tbl.charAt((t >> 12) & 0x3F);
            uri += tbl.charAt((t >> 6) & 0x3F);
            uri += '=';
        } else if (mod === 1) {
            t = str.charCodeAt(i) << 16;
            uri += tbl.charAt((t >> 18) & 0x3F);
            uri += tbl.charAt((t >> 12) & 0x3F);
            uri += '=';
            uri += '=';
        }

        return uri;
    }
}


export default joinURI;

// use interface for types

// import member from "./member";
//
// function room(name, desc, mid, ) {
//
//
//
//
// }
import {Member} from "./Member";

import {Country, CountryType, status} from "./types";

export interface Room {
    name: string,
    desc: string,
    members: Member[],

    country: CountryType,
    status: status,
}
// function Room() {
//
// }


// export const country = Object.freeze({
//     ALL: 'country/all',
//     KOREA: 'country/korea',
//     JAPAN: 'country/japan'
// });
//
// export const inst = Object.freeze({
//     ALL: 'inst/all',
//     VOCAL: 'inst/vocal',
//     GUITAR: 'inst/guitar',
//     BASS: 'inst/bass',
//     KEYS: 'inst/keys',
//     DRUMS: 'inst/drums'
// });
//
// export const status = Object.freeze({
//     ALL: 'status/ALL',
//     PUBLIC: 'status/PUBLIC',
//     PRIVATE: 'status/PRIVATE'
// });

export default Room;
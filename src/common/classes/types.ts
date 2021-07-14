// export const country = Object.freeze({
//     // ALL: 'country/all',
//     KOREA: 'country/KOREA',
//     JAPAN: 'country/JAPAN'
// });
// export type countryType = typeof country[keyof typeof country];
export class Country {
    public static readonly KOREA = 'country/KOREA';
    public static readonly JAPAN = 'country/JAPAN';
    public static readonly OTHER = 'country/OTHER';
}
export type CountryType = typeof Country[keyof typeof Country];


export class Inst {
    public static readonly VOCAL = 'inst/VOCAL';
    public static readonly GUITAR = 'inst/GUITAR';
    public static readonly BASS = 'inst/BASS';
    public static readonly KEYS = 'inst/KEYS';
    public static readonly DRUMS = 'inst/DRUMS';
    public static readonly OTHER = 'inst/OTHER';
}
export type InstType = typeof Inst[keyof typeof Inst];


export class Status {
    public static readonly PUBLIC = 'status/PUBLIC';
    public static readonly PRIVATE = 'status/PRIVATE';
}
export type StatusType = typeof Status[keyof typeof Status];
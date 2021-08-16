export class FilterClass {
    public static readonly search = 'search';
    public static readonly country = 'country';
    public static readonly inst = 'inst';
    public static readonly status = 'status';
}
// export type FilterType = typeof Filter[keyof typeof Filter];
export type FilterClassType = "search" |"country" | "inst" | "status";

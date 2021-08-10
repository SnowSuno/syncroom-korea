export class SidebarClass {
    public static readonly MENU = 'sidebar/class/MENU';
    public static readonly SETTINGS = 'sidebar/class/SETTINGS';
}
export type SidebarClassType = typeof SidebarClass[keyof typeof SidebarClass] | null;

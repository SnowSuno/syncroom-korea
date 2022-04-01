export class ModalClass {
    public static readonly PASSWORD = 'modal/class/PASSWORD';
    public static readonly SHARE = 'modal/class/SHARE';
    public static readonly FOOLS = 'modal/class/FOOLS'
}
export type ModalClassType = typeof ModalClass[keyof typeof ModalClass] | null;

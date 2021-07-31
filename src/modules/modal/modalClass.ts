export class ModalClass {
    public static readonly PASSWORD = 'modal/class/PASSWORD';
    public static readonly SHARE = 'modal/class/SHARE';
}
export type ModalClassType = typeof ModalClass[keyof typeof ModalClass] | null;

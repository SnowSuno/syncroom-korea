import {ModalClass, ModalClassType} from "./modalClass";

const OPEN = 'modal/OPEN' as const;
const CLOSE = 'modal/CLOSE' as const;

type openModalProps = {modalClass: ModalClassType, roomName: string}
export const openModal = ({modalClass, roomName}: openModalProps) => ({
    type: OPEN,
    modalClass,
    roomName
});
export const closeModal = () => ({
    type: CLOSE
});

type ModalAction =
    | ReturnType<typeof openModal>
    | ReturnType<typeof closeModal>;

type ModalState = {
    modalClass: ModalClassType;
    roomName: string;
};

const initialState: ModalState = {
    modalClass: null,
    roomName: '',
};

function modal(
    state: ModalState = initialState,
    action: ModalAction
): ModalState {
    switch (action.type) {
        case OPEN:
            return {
                modalClass: action.modalClass,
                roomName: action.roomName,
            };
        case CLOSE:
            return {
                modalClass: null,
                roomName: '',
            };
        default:
            return state;
    }
}

export default modal;
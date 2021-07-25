const OPEN = 'modal/OPEN' as const;
const CLOSE = 'modal/CLOSE' as const;
const SET_PASSWORD = 'modal/SET_PASSWORD' as const;

export const openModal = (roomName: string) => ({
    type: OPEN,
    roomName
});
export const closeModal = () => ({
    type: CLOSE
});
export const setPassword = (password: string) => ({
    type: SET_PASSWORD,
    password
});

type ModalAction =
    | ReturnType<typeof openModal>
    | ReturnType<typeof closeModal>
    | ReturnType<typeof setPassword>;

type ModalState = {
    isOpen: boolean;
    roomName: string;
    password: string;
};

const initialState: ModalState = {
    isOpen: false,
    roomName: '',
    password: '',
};

function modal(
    state: ModalState = initialState,
    action: ModalAction
): ModalState {
    switch (action.type) {
        case OPEN:
            return {
                isOpen: true,
                roomName: action.roomName,
                password: ''
            };
        case CLOSE:
            return {
                isOpen: false,
                roomName: '',
                password: ''
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            };
        default:
            return state;
    }
}

export default modal;
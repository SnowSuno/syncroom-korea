const OPEN = 'modal/OPEN' as const;
const CLOSE = 'modal/CLOSE' as const;

export const openModal = () => ({
    type: OPEN
});
export const closeModal = () => ({
    type: CLOSE
});

type ModalAction =
    | ReturnType<typeof openModal>
    | ReturnType<typeof closeModal>;

type ModalState = {
    isOpen: boolean;
};

const initialState: ModalState = {
    isOpen: false
};

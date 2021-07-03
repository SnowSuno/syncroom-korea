import {useState} from "react";

const useModal = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }

    return [open, openModal, closeModal]
}

export default useModal;

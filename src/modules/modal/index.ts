const OPEN = 'modal/OPEN' as const;
const CLOSE = 'modal/CLOSE' as const;

export const openModal = () => ({
    type: OPEN
});
export const closeModal = () => ({
    type: CLOSE
});

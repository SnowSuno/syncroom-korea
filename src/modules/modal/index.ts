import { ModalClassType } from "./modalClass";
import { Status, StatusType } from "../../common/classes/properties";

const OPEN = "modal/OPEN" as const;
const CLOSE = "modal/CLOSE" as const;

type openModalProps = {
  modalClass: ModalClassType;
  roomName: string;
  status?: StatusType;
  temp?: boolean;
};
export const openModal = ({
  modalClass,
  roomName,
  status = Status.PRIVATE,
  temp = true,
}: openModalProps) => ({
  type: OPEN,
  payload: {
    modalClass,
    roomName,
    status,
    temp,
  },
});
export const closeModal = () => ({
  type: CLOSE,
});

type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;

type ModalState = {
  modalClass: ModalClassType;
  roomName: string;
  status: StatusType;
  temp: boolean;
};

const initialState: ModalState = {
  modalClass: null,
  roomName: "",
  status: Status.PRIVATE,
  temp: false,
};

function modal(
  state: ModalState = initialState,
  action: ModalAction,
): ModalState {
  switch (action.type) {
    case OPEN:
      return action.payload;
    case CLOSE:
      return {
        ...state,
        modalClass: null,
      };
    default:
      return state;
  }
}

export default modal;

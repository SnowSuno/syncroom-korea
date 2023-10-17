import { SidebarClassType } from "./sidebarClass";

const OPEN = "sidebar/OPEN" as const;
const CLOSE = "sidebar/CLOSE" as const;

type openSidebarProps = {
  sidebarClass: SidebarClassType;
};
export const openSidebar = ({ sidebarClass }: openSidebarProps) => ({
  type: OPEN,
  payload: sidebarClass,
});
export const closeSidebar = () => ({
  type: CLOSE,
});

type SidebarAction =
  | ReturnType<typeof openSidebar>
  | ReturnType<typeof closeSidebar>;

type SidebarState = {
  sidebarClass: SidebarClassType;
};

const initialState: SidebarState = {
  sidebarClass: null,
};

function sidebar(
  state: SidebarState = initialState,
  action: SidebarAction,
): SidebarState {
  switch (action.type) {
    case OPEN:
      return { sidebarClass: action.payload };
    case CLOSE:
      return { sidebarClass: null };
    default:
      return state;
  }
}

export default sidebar;

const ADD = 'user/ADD' as const;
const DELETE = 'user/DELETE' as const;

export const addUser = (nickname: string) => ({
    type: ADD,
    payload: {nickname}
});

export const deleteUser = (nickname: string) => ({
    type: DELETE,
    payload: {nickname}
});

type FriendAction =
    | ReturnType<typeof addUser>
    | ReturnType<typeof deleteUser>;

type FriendState = {
    userList: Set<string>
};

const initialState: FriendState = {
    userList: new Set<string>()
};

function friend(
    state: FriendState = initialState,
    action: FriendAction
): FriendState {
    const userList = new Set(state.userList);
    switch (action.type) {
        case ADD:
            userList.add(action.payload.nickname)
            return {userList};
        case DELETE:
            userList.delete(action.payload.nickname)
            return {userList};
        default:
            return state;
    }
}

export default friend;

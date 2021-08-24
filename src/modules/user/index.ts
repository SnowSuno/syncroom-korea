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
    userList: string[]
};

const initialState: FriendState = {
    userList: []
};

function friend(
    state: FriendState = initialState,
    action: FriendAction
): FriendState {
    switch (action.type) {
        case ADD:
            return state.userList.includes(action.payload.nickname)
                ? state
                : {userList: state.userList.concat(action.payload.nickname).sort()};
        case DELETE:
            return {
                userList: state.userList.filter(nickname => nickname !== action.payload.nickname)
            };
        default:
            return state;
    }
}

export default friend;

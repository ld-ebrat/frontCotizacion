export function UserReducer(state, action) {
    switch (action.type) {
        case "addDate":
            return {
                user: {
                    ...state.user,
                    "email":action.user.email,
                    "pass":action.user.pass
                }
            }
            break;
        default:
    }
}
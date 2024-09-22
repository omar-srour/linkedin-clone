import { SET_USER, CLEAR_USER, UPDATE_USER_DETAILS } from "../Action/ActionType";

const Initial = {
    user: null,
};


const userReducer = (state = Initial, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,

            }
    

        default:
            return state;


    }

}
export default userReducer
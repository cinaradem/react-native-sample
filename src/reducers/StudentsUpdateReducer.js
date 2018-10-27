import {CREATE_REQUEST, CREATE_REQUEST_SUCCESS, UPDATE_REQUEST} from "../actions/types";


const INITIAL_STATE = {
    loadingUpdate: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_REQUEST:
            return {loading: true};
        case CREATE_REQUEST_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}
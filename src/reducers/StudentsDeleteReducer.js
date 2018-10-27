import {} from "../actions/types";
import {DELETE_REQUEST} from "../actions/types";
import {DELETE_REQUEST_SUCCESS} from "../actions/types";


const INITIAL_STATE = {
    loadingUpdate: false,
    loadingDelete:false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DELETE_REQUEST:
            return {loading: true};
        case DELETE_REQUEST_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}
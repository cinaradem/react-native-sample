import {combineReducers} from 'redux';
import KimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsDataReducer from "./StudentsDataReducer";
import StudentsCreateReducer from "./StudentsCreateReducer";
import StudentsUpdateReducer from "./StudentsUpdateReducer";
import StudentsDeleteReducer from "./StudentsDeleteReducer";

export default combineReducers({
    kimlikdogrulamaResponse: KimlikdogrulamaReducers,
    studentDataResponse: StudentsDataReducer,
    studentsCreateResponse: StudentsCreateReducer,
    studentsUpdateReponse: StudentsUpdateReducer,
    studentsDeleteReponse: StudentsDeleteReducer,
});
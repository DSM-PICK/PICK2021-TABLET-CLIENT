import { combineReducers } from "redux";
import loginReducer from "./userReducer/userReducer";
import StudentReducer from "./userReducer/teacherReducer";

export default combineReducers({ loginReducer, StudentReducer });

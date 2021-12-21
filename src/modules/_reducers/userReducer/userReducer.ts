import { User } from "../../../lib/interface/user";
import { LOGIN_USER } from "../../_actions/types";

const initialState: User = {
  id: "",
  password: "",
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};

export default loginReducer;

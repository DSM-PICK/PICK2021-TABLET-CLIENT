import axios from "axios";
import { baseURL } from "../../../lib/api/axios";
import { User } from "../../../lib/interface/user";
import { LOGIN_USER } from "../types";

export function loginUser(inputData: User) {
  const data = axios
    .post(`${baseURL}`, { inputData })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

  return {
    type: LOGIN_USER,
    payload: data,
  };
}

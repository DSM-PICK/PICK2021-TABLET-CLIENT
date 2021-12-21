/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  postLoginApi(id: string, password: string) {
    return request({
      url: "/teacher/login",
      method: "post",
      data: {
        id,
        password,
      },
    });
  },
};

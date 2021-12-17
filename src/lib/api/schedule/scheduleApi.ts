/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  getLocationList() {
    return request({
      url: "/location/list",
      method: "get",
    });
  },
};

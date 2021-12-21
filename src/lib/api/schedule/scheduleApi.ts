/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  getScheduleName() {
    return request({
      url: "/schedule/name",
      method: "get",
    });
  },
  getScheduleListMonth(month: number) {
    return request({
      url: `/schedule/list/${month}`,
    });
  },
};

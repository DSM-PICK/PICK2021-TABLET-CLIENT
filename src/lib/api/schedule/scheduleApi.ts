/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  getScheduleName() {
    return request({
      url: "/schedule/name",
      method: "get",
    });
  },
  getScheduleListMonth(year: string, month: string) {
    return request({
      url: `/schedule/list/${year}/${month}`,
    });
  },
  getScheduleDate(date: string) {
    return request({
      url: `/schedule/${date}`,
    });
  },
};

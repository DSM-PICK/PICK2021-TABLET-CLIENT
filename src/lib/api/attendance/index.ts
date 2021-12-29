/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  getAttendance() {
    return request({
      url: "/attendance",
    });
  },
  deleteAttendance(id: number) {
    return request({
      url: "/attendance",
      method: "delete",
      data: { id },
    });
  },
  patchAttendance(data: string) {
    return request({
      url: "/attendance",
      method: "patch",
      data: { data },
    });
  },
  patchAttendanceState(state: string) {
    return request({
      url: "/attendance/state",
      method: "patch",
      data: { state },
    });
  },
};

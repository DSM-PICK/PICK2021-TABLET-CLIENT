/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  getScheduleName() {
    return request({
      url: "/schedule/name",
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
  patchSchedule(date: string, name: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL") {
    return request({
      url: "/schedule",
      method: "patch",
      data: {
        date,
        name,
      },
    });
  },
  patchTeacher(date: string, floor: number, teacher_id: string) {
    return request({
      url: "/schedule/director",
      method: "patch",
      data: {
        date,
        floor,
        teacher_id,
      },
    });
  },
};

import { selectorFamily } from "recoil";
import schedule from "../../../lib/api/schedule/scheduleApi";

export const scheduleDateSelector = selectorFamily<any, string>({
  key: "scheduleDateSelector/get",
  get: (date) => async () => {
    try {
      const res = await schedule.getScheduleDate(date);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const scheduleListMonthSelector = selectorFamily<any, number>({
  key: "scheduleListMonthSelector/get",
  get: (month) => async () => {
    try {
      const res = await schedule.getScheduleListMonth(month);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

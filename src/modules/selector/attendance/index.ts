import { selector } from "recoil";
import attendance from "../../../lib/api/attendance";
import { AttendanceType } from "../../../lib/interface/Attendance";

export const attendanceSelector = selector<AttendanceType[]>({
  key: "attendanceSelector/get",
  get: async () => {
    try {
      const res = await attendance.getAttendance();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

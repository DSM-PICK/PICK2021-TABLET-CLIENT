import attendance from "../../../lib/api/attendance";
import { ATTENDANCE_DELETE } from "../types";

export async function attendanceListGet() {
  try {
    const res = await attendance.getAttendance();
    return res.data;
  } catch (e) {
    console.log(e);
  }

  return { type: ATTENDANCE_DELETE };
}

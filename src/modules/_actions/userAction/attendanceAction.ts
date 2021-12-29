import attendance from "../../../lib/api/attendance";
import { ATTENDANCE_DELETE, ATTENDANCE_GET } from "../types";

export async function attendanceListGet(dispatch ?: any) {
  dispatch({ type: ATTENDANCE_GET });

  try {
    const res = await attendance.getAttendance();
    return res.data;
  } catch (e) {
    console.log(e);
  }

  return { type: ATTENDANCE_DELETE };
}

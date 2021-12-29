import { ATTENDANCE_GET } from "../../_actions/types";
import { attendanceListGet } from "../../_actions/userAction/attendanceAction";

function AttendanceReducer(state: any, action: any) {
  switch (action.type) {
    case ATTENDANCE_GET:
      return attendanceListGet();
    default:
      return state;
  }
}

export default AttendanceReducer;

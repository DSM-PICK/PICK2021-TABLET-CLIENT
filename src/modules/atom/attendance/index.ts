import { atom } from "recoil";
import { AttendanceType } from "../../../lib/interface/Attendance";

export const moveModal = atom({
  key: "modal",
  default: false,
});

export const stateValue = atom({
  key: "state",
  default: "",
});

export const stateSelect = atom({
  key: "stateSelect",
  default: false,
});

export const selectCount = atom({
  key: "count",
  default: 0,
});

export const attendanceData = atom<AttendanceType>({
  key: "attendance",
  default: {
    state: "",
    reason: "",
    name: "",
    date: "",
  },
});

export const attendanceDataList = atom<AttendanceType[]>({
  key: "attendanceList",
  default: [],
});

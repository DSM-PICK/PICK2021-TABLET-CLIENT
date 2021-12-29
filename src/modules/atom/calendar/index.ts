import { atom } from "recoil";
import moment from "moment";

export const date = atom<moment.Moment>({
  key: "date",
  default: moment(),
});

export const dateValue = atom<string>({
  key: "dateValue",
  default: "",
});

export const scheduleState = atom<string>({
  key: "scheduleState",
  default: "",
});

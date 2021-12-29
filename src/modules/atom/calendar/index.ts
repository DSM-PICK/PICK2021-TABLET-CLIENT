import { atom } from "recoil";
import moment from "moment";

export const date = atom<moment.Moment>({
  key: "date",
  default: moment(),
});

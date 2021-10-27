import { atom } from "recoil";
import moment from "moment";

export const date = atom({
  key: "date",
  default: moment(),
});

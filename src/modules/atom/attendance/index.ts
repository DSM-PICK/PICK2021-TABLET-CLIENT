import { atom } from "recoil";

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

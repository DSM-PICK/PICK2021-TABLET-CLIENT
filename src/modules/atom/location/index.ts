import { atom } from "recoil";

export const FloorId = atom<number | undefined>({
  key: "FloorId",
  default: undefined,
});

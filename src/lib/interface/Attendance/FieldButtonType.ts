import { LocationType } from "../location";

export interface FieldButtonType {
  id: number;
  name: string;
  floor?: number;
  major_id?: number;
}

export const FieldButtonList: FieldButtonType[] = [
  {
    id: 1,
    name: "외출",
  },
  {
    id: 2,
    name: "현체",
  },
  {
    id: 3,
    name: "귀가",
  },
  {
    id: 4,
    name: "이동",
  },
  {
    id: 5,
    name: "취업",
  },
];

export const ClassButtonList: FieldButtonType[] = [
  {
    id: 2,
    floor: 2,
    name: "2층",
  },
  {
    id: 3,
    floor: 3,
    name: "3층",
  },
  {
    id: 4,
    floor: 4,
    name: "4층",
  },
  {
    id: 5,
    floor: 5,
    name: "5층",
  },
  {
    id: 6,
    floor: 6,
    name: "특별실",
  },
];

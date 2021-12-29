export interface FieldButtonType {
  id: number;
  field: string;
}

export const FieldButtonList: FieldButtonType[] = [
  {
    id: 1,
    field: "외출",
  },
  {
    id: 2,
    field: "현체",
  },
  {
    id: 3,
    field: "귀가",
  },
  {
    id: 4,
    field: "이동",
  },
  {
    id: 5,
    field: "취업",
  },
];

export const ClassButtonList: FieldButtonType[] = [
  {
    id: 1,
    field: "전체",
  },
  {
    id: 2,
    field: "2층",
  },
  {
    id: 3,
    field: "3층",
  },
  {
    id: 4,
    field: "4층",
  },
  {
    id: 5,
    field: "5층",
  },
  {
    id: 6,
    field: "특별실",
  },
];

import React from "react";
import { MainColor } from "../../../utils/color/color";
import { FieldButtonType } from "../../../lib/interface/Attendance/FieldButtonType";
import * as S from "./style";

interface Props {
  item: FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const SelectItem = ({ item, selected, selectedHandlerColor }: Props) => {
  return (
    <S.SelectItem
      onClick={() => selectedHandlerColor(item)}
      style={
        selected === item.id
          ? { backgroundColor: `${MainColor}`, color: "white" }
          : { backgroundColor: "", color: "black" }
      }
    >
      {item.field}
    </S.SelectItem>
  );
};

export default SelectItem;

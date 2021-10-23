import React from "react";
import { MainColor } from "../../../../utils/color/color";
import { FieldButtonType } from "../../../../utils/interface/Attendance/FieldButtonType";
import * as S from "./style";

interface Props {
  item: FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const FloorClassItem = ({ item, selectedHandlerColor, selected }: Props) => {
  return (
    <S.ItemButton
      onClick={() => selectedHandlerColor(item)}
      style={{
        color: item.id === selected ? `${MainColor}` : "",
      }}
    >
      {item.field}
    </S.ItemButton>
  );
};

export default FloorClassItem;

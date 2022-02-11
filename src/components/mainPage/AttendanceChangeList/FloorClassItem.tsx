import React from "react";
import { MainColor } from "../../../utils/color/color";
import * as S from "./style";
import { LocationType } from "../../../lib/interface/location";
import { FieldButtonType } from "../../../lib/interface/Attendance/FieldButtonType";

interface Props {
  item: LocationType | FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const FloorClassItem = ({ item, selectedHandlerColor, selected }: Props) => {
  return (
    <S.ItemButton
      onClick={() => selectedHandlerColor(item)}
      style={{
        color: item.id === selected ? `${MainColor}` : "",
        fontWeight: item.id === selected ? 700 : "normal",
      }}
    >
      {item?.name}
    </S.ItemButton>
  );
};

export default FloorClassItem;

import React from "react";
import { MainColor } from "../../../../utils/color/color";
import { FieldButtonType } from "../../../../utils/interface/Attendance/FieldButtonType";
import * as S from "./style";

interface Props {
  item: FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const FieldButton = (props: Props) => {
  return (
    <S.FieldButton
      onClick={() => props.selectedHandlerColor(props.item)}
      style={{
        background: props.item.id === props.selected ? `${MainColor}` : "",
        color: props.item.id === props.selected ? "white" : "black",
      }}
    >
      {props.item.field}
    </S.FieldButton>
  );
};

export default FieldButton;

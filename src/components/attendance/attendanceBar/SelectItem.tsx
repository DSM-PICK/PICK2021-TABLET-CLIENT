import React from "react";
import { MainColor } from "../../../utils/color/color";
import * as S from "./style";
import { LocationType } from "../../../lib/interface/location";
import { useHistory } from "react-router-dom";
import { FieldButtonType } from "../../../lib/interface/Attendance/FieldButtonType";

interface Props {
  item: LocationType | FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const SelectItem = ({ item, selected, selectedHandlerColor }: Props) => {
  const { push } = useHistory();

  return (
    <S.SelectItem
      onClick={() => {
        selectedHandlerColor(item);
        push(`/attendance?floor=${item?.floor}&id=${item.major_id}`);
      }}
      style={
        selected === item.id
          ? { backgroundColor: `${MainColor}`, color: "white" }
          : { backgroundColor: "", color: "black" }
      }
    >
      {item.name}
    </S.SelectItem>
  );
};

export default SelectItem;

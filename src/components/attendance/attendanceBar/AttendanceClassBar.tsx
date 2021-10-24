import React, { useState } from "react";
import {
  ClassButtonList,
  FieldButtonType,
} from "../../../utils/interface/Attendance/FieldButtonType";
import SelectItem from "./SelectItem";
import * as S from "./style";

const AttendanceClassBar = () => {
  const [selected, setSelected] = useState<number>(1);

  const selectedHandlerColor = (item: FieldButtonType) => {
    setSelected(item.id);
  };

  return (
    <S.SelectBarWrapper>
      {ClassButtonList.map((item: FieldButtonType) => (
        <SelectItem
          key={item.id}
          item={item}
          selected={selected}
          selectedHandlerColor={selectedHandlerColor}
        />
      ))}
    </S.SelectBarWrapper>
  );
};

export default AttendanceClassBar;

import React, { useState } from "react";
import {
  ClassButtonList,
  FieldButtonType,
} from "../../../lib/interface/Attendance/FieldButtonType";
import SelectItem from "./SelectItem";
import * as S from "./style";

const LocationBar = () => {
  const [selected, setSelected] = useState<number>(2);

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

export default LocationBar;

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  ClassButtonList,
  FieldButtonType,
} from "../../../lib/interface/Attendance/FieldButtonType";
import { locationListSelector } from "../../../modules/selector/location";
import SelectItem from "./SelectItem";
import * as S from "./style";

const AttendanceClassBar = () => {
  const [selected, setSelected] = useState<number>(1);
  const location = useRecoilValue(locationListSelector);

  useEffect(() => {
    console.log(location);
  }, []);

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

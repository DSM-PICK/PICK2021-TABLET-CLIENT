import React, { useEffect, useState } from "react";
import * as S from "./style";
import { SubTitle } from "../../../index";
import {
  ClassButtonList,
  FieldButtonType,
} from "../../../../lib/interface/Attendance/FieldButtonType";
import FloorClassItem from "./FloorClassItem";
import ListContainer from "./ListContainer";

const AttendanceChangeList = () => {
  const [selected, setSelected] = useState<number>(1);

  const selectedHandlerColor = (item: FieldButtonType) => {
    setSelected(item.id);
  };

  return (
    <S.MainWrapper>
      <SubTitle title="출결변동내역" />
      <S.SelectButtonWrapper>
        {ClassButtonList.map((item) => (
          <FloorClassItem
            key={item.id}
            item={item}
            selectedHandlerColor={selectedHandlerColor}
            selected={selected}
          />
        ))}
      </S.SelectButtonWrapper>
      <ListContainer />
    </S.MainWrapper>
  );
};

export default AttendanceChangeList;

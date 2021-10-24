import React from "react";
import { MainBack } from "../../../utils/assets";
import * as S from "./style";

const AttendanceSelect = () => {
  return (
    <S.AttendanceSelectWrapper>
      <img src={MainBack} alt="" />
      <span>전공 동아리</span>
    </S.AttendanceSelectWrapper>
  );
};

export default AttendanceSelect;

import moment from "moment";
import React from "react";
import * as S from "./style";

const CalendarContent = () => {
  const m = moment();
  const week: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  return <S.CalendarWrap></S.CalendarWrap>;
};

export default CalendarContent;

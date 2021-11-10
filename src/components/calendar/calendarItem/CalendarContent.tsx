import moment from "moment";
import React, { useState } from "react";
import * as S from "./style";

const CalendarContent = () => {
  const [date, setDate] = useState<moment.Moment>(() => moment());
  const m = moment();
  const week: string[] = ["일", "월", "화", "수", "목", "금", "토"];

  const handleDayClick = (current: moment.Moment) => setDate(current);
  const returnDay = () => setDate(moment());
  /*   const jumpToMonth = (num: number) =>
    num
      ? setDate(date.clone().add(30, "day"))
      : setDate(date.clone().subtract(30, "day"));
 */
  return <S.CalendarWrap></S.CalendarWrap>;
};

export default CalendarContent;

import moment from "moment";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { date } from "../../../modules/atom/calendar";
import * as S from "./style";
import "../../../index.css";

const CalendarContent = () => {
  const [baseDate, setBaseDate] = useRecoilState(date);
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const handleDayClick = (current: moment.Moment) => setBaseDate(current);

  function generate() {
    const today = baseDate;

    const startWeek = today.clone().startOf("month").week();
    const endWeek =
      today.clone().endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();

    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="content" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = today
                .clone()
                .week(week)
                .startOf("week")
                .add(n + i, "day");

              let isSelected =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "selected"
                  : "";

              let isGrayed =
                current.format("MM") !== today.format("MM") ? "grayed" : "";

              return (
                <div
                  className={`box ${isSelected} ${isGrayed}`}
                  key={i}
                  onClick={() => handleDayClick(current)}
                >
                  <div className="date_more">
                    <span>{current.format("D")}</span>
                    {/* <span>방과후</span> */}
                  </div>
                  <div className="teacher_list">
                    <span>1층 강은빈</span>
                    <span>1층 강은빈</span>
                    <span>1층 강은빈</span>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
    return calendar;
  }

  const weekControll = (week: string[]) => {
    return (
      <>
        {week.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </>
    );
  };

  return (
    <S.CalendarWrap>
      <S.CalendarDate>{weekControll(week)}</S.CalendarDate>
      <S.ContentWrap>{generate()}</S.ContentWrap>
    </S.CalendarWrap>
  );
};

export default CalendarContent;

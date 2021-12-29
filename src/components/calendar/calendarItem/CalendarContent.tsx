/* eslint-disable no-loop-func */
import moment from "moment";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { date, dateValue } from "../../../modules/atom/calendar";
import * as S from "./style";
import "../../../index.css";
import {
  scheduleDateSelector,
  scheduleListMonthSelector,
} from "../../../modules/selector/schedule";
import { StateChangeHook } from "../../../lib/hook/stateChangeHook";
import { ScheduleListType } from "../../../lib/interface/schedule/schedule";

const CalendarContent = () => {
  const [baseDate, setBaseDate] = useRecoilState(date);
  const [dateContent, setDateContent] = useRecoilState(dateValue);
  const test = baseDate.format("YYYY-MM-DD");
  const week = ["월", "화", "수", "목", "금"];

  const stateValue = useRecoilValue(scheduleDateSelector(dateContent));
  const scheduleList = useRecoilValue(
    scheduleListMonthSelector({
      year: baseDate.format("YYYY"),
      month: baseDate.format("MM"),
    })
  );
  const handleDayClick = (current: moment.Moment) => setBaseDate(current);

  useEffect(() => {
    setDateContent(test);
    console.log(stateValue);
    console.log(scheduleList);
    console.log(test);
  }, [test]);

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
          {Array(5)
            .fill(2)
            .map((_n, i) => {
              let current = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(i + 1, "day");

              let isSelected =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "selected"
                  : "";

              let isGrayed =
                current.format("MM") !== today.format("MM") ? "grayed" : "";

              if (today.format("YYYY-MM-DD") === test) {
              }

              return (
                <S.BoxItem
                  className={`box ${isSelected} ${isGrayed}`}
                  key={i}
                  onClick={() => handleDayClick(current)}
                >
                  {/* {today.format("YYYY-MM-DD") === test
                    ? scheduleList.map(
                        (item: ScheduleListType, idx: number) => (
                          <> */}
                  <div className="date_more">
                    <span>{current.format("D")}</span>
                    <span>{StateChangeHook(stateValue?.name)}</span>
                  </div>
                  <div className="teacher_list">
                    {/* {item.director.map((teacher) => ( */}
                      <span >강은빈</span>
                    {/* ))} */}
                  </div>
                  {/* </>
                        )
                      )
                    : ""} */}
                </S.BoxItem>
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

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DatePeriodChangeHook } from "../../../../../lib/hook/datePeriodChangeHook";
import { DateSplitHook } from "../../../../../lib/hook/dateSplitHook";
import { attendanceData } from "../../../../../modules/atom/attendance";
import { EnrollmentItem } from "../style";
import * as S from "./style";

const CalendarItem = () => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const [clendarOne, setClendarOne] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [dateValue, setDateValue] = useState<any>(DateSplitHook(startDate));
  const [date, setDate] = useState({
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
    startPeriod: "",
    endPeriod: "",
  });

  useEffect(() => {
    console.log(date);
  }, [date]);

  useEffect(() => {
    setAttendance({
      ...attendance,
      term: DatePeriodChangeHook(date),
    });
  }, [date]);

  return (
    <EnrollmentItem>
      <S.SubTitle>날짜</S.SubTitle>
      <S.DateWrapper clendarOne={clendarOne}>
        <div className="date_item_wrap">
          <span
            onClick={() => setClendarOne(!clendarOne)}
          >{`${dateValue[1]}월 ${dateValue[2]}일`}</span>
          <div className="date_period">
            <input
              type="text"
              placeholder="_"
              onChange={(e) =>
                setDate({
                  ...date,
                  startPeriod: e.target.value,
                })
              }
            />
            <span>교시 ~ </span>
          </div>
        </div>
        <div className="date_item_wrap">
          <span>{` ${dateValue[1]}월 ${dateValue[2]}일`}</span>
          <div className="date_period">
            <input
              type="text"
              placeholder="_"
              onChange={(e) =>
                setDate({
                  ...date,
                  endPeriod: e.target.value,
                })
              }
            />
            <span>교시</span>
          </div>
        </div>
      </S.DateWrapper>
    </EnrollmentItem>
  );
};

export default CalendarItem;

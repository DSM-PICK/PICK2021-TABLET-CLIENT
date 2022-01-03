import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "react-datepicker/dist/react-datepicker.css";
import { EnrollmentHistory } from "../../../index";
import Title from "../items/SubTitle";
import * as S from "./style";
import {
  attendanceData,
  attendanceDataList,
} from "../../../../modules/atom/attendance";
import { StateItem, NameItem, CalendarItem, ReasonItem } from "../../../index";

const AttendanceChange = () => {
  const attendance = useRecoilValue(attendanceData);
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const attendanceListAdd = (
    e: React.FormEventHandler<HTMLFormElement> | any
  ) => {
    e.preventDefault();

    setAttendanceList(attendanceList.concat(attendance));
  };

  useEffect(() => {
    console.log(attendance);
  }, [attendance]);

  return (
    <S.AttendanceChangeWrapper>
      <Title title="학생출결변경사항등록" />
      <S.ChangeBox>
        <S.Enrollment onSubmit={(e) => attendanceListAdd(e)}>
          <StateItem />
          <CalendarItem />
          <NameItem />
          <ReasonItem />
        </S.Enrollment>
        {/*  출결 등록 리스트 */}
        <EnrollmentHistory />
      </S.ChangeBox>
    </S.AttendanceChangeWrapper>
  );
};

export default AttendanceChange;

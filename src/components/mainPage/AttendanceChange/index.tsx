import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "react-datepicker/dist/react-datepicker.css";
import Title from "../items/SubTitle";
import {
  attendanceData,
  attendanceDataList,
} from "../../../modules/atom/attendance";
import { StateItem, NameItem, CalendarItem, ReasonItem } from "../../index";
import styled from "@emotion/styled";
import { BoxColor } from "../../../utils/color/color";
import EnrollmentHistory from "./historyList";

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
    <AttendanceChangeWrapper>
      <Title title="학생출결변경사항등록" />
      <ChangeBox>
        <Enrollment onSubmit={(e) => attendanceListAdd(e)}>
          <StateItem />
          <CalendarItem />
          <NameItem />
          <ReasonItem />
        </Enrollment>
        {/*  출결 등록 리스트 */}
        <EnrollmentHistory />
      </ChangeBox>
    </AttendanceChangeWrapper>
  );
};

const AttendanceChangeWrapper = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 33%;
`;

const ChangeBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80%;
  background: ${BoxColor};
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(210, 210, 210, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Enrollment = styled.form`
  width: 55%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AttendanceChange;

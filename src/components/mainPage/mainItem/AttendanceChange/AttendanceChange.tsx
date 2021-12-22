import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EnrollmentHistory, FieldButton } from "../../../index";
import {
  FieldButtonList,
  FieldButtonType,
} from "../../../../lib/interface/Attendance/FieldButtonType";
import Title from "../items/SubTitle";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { attendanceData } from "../../../../modules/atom/attendance";
import { DateSplitHook } from "../../../../lib/hook/dateSplitHook";

const AttendanceChange = () => {
  const [selected, setSelected] = useState<number>(1);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [dateValue, setDateValue] = useState<any>("");
  const [attendance, setAttendance] = useRecoilState(attendanceData);

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const selectedHandlerColor = (item: FieldButtonType) => {
    setSelected(item.id);
  };

  const { date, name, reason } = attendance;

  const onChange = (e: any) => {
    const { value, name } = e.target;

    setAttendance({
      ...attendance,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(attendance);
    console.log(dateValue);
  }, [dateValue, attendance]);

  return (
    <S.AttendanceChangeWrapper>
      <Title title="학생출결변경사항등록" />
      <S.ChangeBox>
        <S.Enrollment>
          <div className="enrollment-item">
            <S.SubTitle>종류</S.SubTitle>
            <div className="field-item">
              {FieldButtonList.map((item) => (
                <FieldButton
                  key={item.id}
                  item={item}
                  selected={selected}
                  selectedHandlerColor={selectedHandlerColor}
                />
              ))}
            </div>
          </div>
          <div className="enrollment-item">
            <S.SubTitle>날짜</S.SubTitle>
            <DatePicker
              selected={startDate}
              onChange={(datee) => {
                setStartDate(date);
                setDateValue(DateSplitHook(date));
              }}
              customInput={<ExampleCustomInput />}
            />
          </div>
          <div className="enrollment-item">
            <S.SubTitle>이름</S.SubTitle>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              className="text-input"
              placeholder="이름을 입력해주세요"
            />
            <S.SaveButton>등록</S.SaveButton>
          </div>
          <div className="enrollment-item">
            <S.SubTitle>사유</S.SubTitle>
            <input
              type="text"
              name="reason"
              value={reason}
              onChange={(e) => onChange(e)}
              className="text-input"
              placeholder="사유를 입력해주세요"
            />
            <S.SaveButton>저장</S.SaveButton>
          </div>
        </S.Enrollment>
        {/*  출결 등록 리스트 */}
        <EnrollmentHistory />
      </S.ChangeBox>
    </S.AttendanceChangeWrapper>
  );
};

export default AttendanceChange;

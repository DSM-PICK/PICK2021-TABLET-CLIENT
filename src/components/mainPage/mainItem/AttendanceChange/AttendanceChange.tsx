import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldButtonType } from "../../../../utils/interface/Attendance/FieldButton";
import Title from "../items/Title";
import EnrollmentHistory from "./EnrollmentHistory";
import * as S from "./style";

const FieldButton: FieldButtonType[] = [
  {
    id: 1,
    field: "외출",
  },
  {
    id: 2,
    field: "현체",
  },
  {
    id: 3,
    field: "귀가",
  },
  {
    id: 4,
    field: "이동",
  },
  {
    id: 5,
    field: "취업",
  },
];

const AttendanceChange = () => {
  const [startDate, setStartDate] = useState<any>(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  return (
    <S.AttendanceChangeWrapper>
      <Title title="학생출결변경사항등록" />
      <S.ChangeBox>
        <S.Enrollment>
          <div className="enrollment-item">
            <S.SubTitle>종류</S.SubTitle>
            <div className="field-item">
              {FieldButton.map((item) => (
                <span>{item.field}</span>
              ))}
            </div>
          </div>
          <div className="enrollment-item">
            <S.SubTitle>날짜</S.SubTitle>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
          </div>
          <div className="enrollment-item">
            <S.SubTitle>이름</S.SubTitle>
            <input
              type="text"
              className="text-input"
              placeholder="이름을 입력해주세요"
            />
            <S.SaveButton>등록</S.SaveButton>
          </div>
          <div className="enrollment-item">
            <S.SubTitle>사유</S.SubTitle>
            <input
              type="text"
              className="text-input"
              placeholder="사유를 입력해주세요"
            />
            <S.SaveButton>저장</S.SaveButton>
          </div>
        </S.Enrollment>
        <EnrollmentHistory />
      </S.ChangeBox>
    </S.AttendanceChangeWrapper>
  );
};

export default AttendanceChange;

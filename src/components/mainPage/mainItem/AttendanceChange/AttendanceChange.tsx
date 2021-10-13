import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "../../../../utils/assets";
import { FieldButtonType } from "../../../../utils/interface/Attendance/FieldButton";
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
  const [fieldSelect, setFieldSelect] = useState<number>(1);

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
      <h1>출결 변동 사항 등록</h1>
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
            <div className="field-item">
              {FieldButton.map((item) => (
                <span>{item.field}</span>
              ))}
            </div>
          </div>
          <div className="enrollment-item">
            <S.SubTitle>사유</S.SubTitle>
            <input type="text" placeholder="사유를 입력해주세요" />
          </div>
        </S.Enrollment>
        <S.EnrollmentHistory></S.EnrollmentHistory>
      </S.ChangeBox>
    </S.AttendanceChangeWrapper>
  );
};

export default AttendanceChange;

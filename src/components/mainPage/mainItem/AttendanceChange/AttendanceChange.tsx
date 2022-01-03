import React, { forwardRef, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EnrollmentHistory, FieldButton } from "../../../index";
import Title from "../items/SubTitle";
import * as S from "./style";
import {
  FieldButtonList,
  FieldButtonType,
} from "../../../../lib/interface/Attendance/FieldButtonType";
import {
  attendanceData,
  attendanceDataList,
} from "../../../../modules/atom/attendance";
import { DateSplitHook } from "../../../../lib/hook/dateSplitHook";
import teacher from "../../../../lib/api/teacher";

const AttendanceChange = () => {
  const [selected, setSelected] = useState<number>(1);
  const [clendarOne, setClendarOne] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [dateValue, setDateValue] = useState<any>(DateSplitHook(startDate));
  const [dateSecValue, setDateSecValue] = useState<Date>(
    DateSplitHook(startDate)
  );
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const selectedHandlerColor = (item: FieldButtonType) => {
    setSelected(item.id);
  };

  const { period, name, reason } = attendance;

  const onChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;

    setAttendance({
      ...attendance,
      [name]: value,
    });
  };

  const onStudent = (e: any) => {
    const { value, name } = e.target;

    teacher.getStudentNameApi(value);

    setAttendance({
      ...attendance,
      [name]: value,
    });
  };

  const attendanceListAdd = (
    e: React.FormEventHandler<HTMLFormElement> | any
  ) => {
    e.preventDefault();

    setAttendanceList(attendanceList.concat(attendance));

    setAttendance({
      id: "",
      name: "",
      period: 0,
      state: "",
      memo: "",
      term: "",
      reason: "",
    });
  };

  useEffect(() => {
    console.log(attendance);
    console.log("vlaue ", dateValue);
  }, [dateValue, attendance, attendanceList]);

  return (
    <S.AttendanceChangeWrapper>
      <Title title="학생출결변경사항등록" />
      <S.ChangeBox>
        <S.Enrollment onSubmit={(e) => attendanceListAdd(e)}>
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
            <S.DateWrapper clendarOne={clendarOne}>
              <div className="date_item_wrap">
                <span
                  onClick={() => setClendarOne(!clendarOne)}
                >{`${dateValue[0]}년 ${dateValue[1]}월 ${dateValue[2]}일`}</span>
                <span>_교시</span>
              </div>
              <label>
                <DatePicker
                  selected={startDate}
                  onChange={(period) => {
                    setStartDate(period);
                    setDateValue(DateSplitHook(period));
                  }}
                  customInput={<ExampleCustomInput />}
                />
              </label>
              <div className="date_item_wrap">
                <span>{`${dateValue[0]}년 ${dateValue[1]}월 ${dateValue[2]}일`}</span>
                <span>_교시</span>
              </div>
            </S.DateWrapper>
          </div>
          <div className="enrollment-item">
            <S.SubTitle>이름</S.SubTitle>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onStudent(e)}
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

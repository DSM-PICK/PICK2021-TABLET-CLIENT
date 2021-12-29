import React from "react";
import { useRecoilState } from "recoil";
import { attendanceData } from "../../../../../modules/atom/attendance";
import { EnrollmentItem, SaveButton, SubTitle } from "../style";

const ReasonItem = () => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);

  const { reason } = attendance;

  const onChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;

    setAttendance({
      ...attendance,
      [name]: value,
    });
  };

  return (
    <EnrollmentItem>
      <SubTitle>사유</SubTitle>
      <input
        type="text"
        name="reason"
        value={reason}
        onChange={(e) => onChange(e)}
        className="text-input"
        placeholder="사유를 입력해주세요"
      />
      <SaveButton>저장</SaveButton>
    </EnrollmentItem>
  );
};

export default ReasonItem;

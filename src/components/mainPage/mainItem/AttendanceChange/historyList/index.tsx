import React from "react";
import { Close } from "../../../../../utils/assets";
import * as S from "../style";
import { useRecoilState } from "recoil";
import {
  attendanceData,
  attendanceDataList,
} from "../../../../../modules/atom/attendance";
import { AttendancePostType } from "../../../../../lib/interface/Attendance";
import attendance from "../../../../../lib/api/attendance";
import { ToastSuccess } from "../../../../../lib/hook/toastHook";

const EnrollmentHistory = () => {
  const [attendanceValue, setAttendanceValue] = useRecoilState(attendanceData);
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const attendanceFilter = (id: number) => {
    setAttendanceList(attendanceList.filter((item) => item.student_id !== id));
  };

  const attendanceHandler = (e: any) => {
    e.preventDefault();

    attendance.postAttendance(attendanceValue).then(() => {
      ToastSuccess("출결이 등록되었습니다.");
      setAttendanceValue({
        student_id: 0,
        name: "",
        state: "",
        term: "",
        reason: "",
      });
      setAttendanceList([]);
    });
  };

  return (
    <S.EnrollmentHistory onSubmit={(e) => attendanceHandler(e)}>
      <div className="history-list-wrapper">
        {attendanceList.length > 0 ? (
          <>
            {attendanceList.map((item: AttendancePostType, index) => (
              <div key={index} className="history-wrapper">
                <div className="std-info">
                  <span>{item.state}</span>
                  <span>{item.name}</span>
                </div>
                <span>{item.reason}</span>
                <img
                  src={Close}
                  alt="삭제버튼"
                  onClick={() => attendanceFilter(item.student_id)}
                />
              </div>
            ))}
          </>
        ) : (
          <>학생을 추가해주세요.</>
        )}
      </div>
      <button>출결 변경 등록</button>
    </S.EnrollmentHistory>
  );
};

export default EnrollmentHistory;

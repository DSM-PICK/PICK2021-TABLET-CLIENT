import React from "react";
import { Close } from "../../../../utils/assets";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { attendanceDataList } from "../../../../modules/atom/attendance";
import { AttendanceType } from "../../../../lib/interface/Attendance";

const EnrollmentHistory = () => {
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const attendanceFilter = (name: string) => {
    setAttendanceList(attendanceList.filter((item) => item.name !== name));
  };

  return (
    <S.EnrollmentHistory>
      <div className="history-list-wrapper">
        {attendanceList.length > 0 ? (
          <>
            {attendanceList.map((item: AttendanceType, index) => (
              <div key={index} className="history-wrapper">
                <div className="std-info">
                  <span>{item.state}</span>
                  <span>{item.name}</span>
                </div>
                <span>{item.reason}</span>
                <img
                  src={Close}
                  alt="삭제버튼"
                  onClick={() => attendanceFilter(item.name)}
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

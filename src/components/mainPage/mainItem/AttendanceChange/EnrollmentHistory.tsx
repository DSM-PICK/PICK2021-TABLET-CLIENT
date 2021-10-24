import React from "react";
import { Close } from "../../../../utils/assets";
import { EnrollmentHistoryType } from "../../../../utils/interface/Attendance/EnrollmentType";
import * as S from "./style";

const test: EnrollmentHistoryType[] = [
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
  {
    s_num: 2201,
    name: "강은빈",
    reason: "병원",
  },
];

const EnrollmentHistory = () => {
  return (
    <S.EnrollmentHistory>
      <div className="history-list-wrapper">
        {test.map((item, index) => (
          <div key={index} className="history-wrapper">
            <div className="std-info">
              <span>{item.s_num}</span>
              <span>{item.name}</span>
            </div>

            <span>{item.reason}</span>
            <img src={Close} alt="닫기 버튼" />
          </div>
        ))}
      </div>
      <button>출결 변경 등록</button>
    </S.EnrollmentHistory>
  );
};

export default EnrollmentHistory;

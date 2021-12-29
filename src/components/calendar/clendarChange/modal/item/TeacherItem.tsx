import React from "react";
import { useRecoilValue } from "recoil";
import { teacherListSelector } from "../../../../../modules/selector/teacher";
import * as S from "../style";

const TeacherItem = () => {
  const teacherValue = useRecoilValue(teacherListSelector);
  

  return (
    <S.TeacherInfoWrapper>
      <S.FloorItemBox>
        <div className="teacher_wrap">
          <span>2층</span>
          <span>강은빈</span>
        </div>
        <div className="teacher_wrap">
          <span>3층</span>
          <span>강은빈</span>
        </div>
        <div className="teacher_wrap">
          <span>4층</span>
          <span>강은빈</span>
        </div>
      </S.FloorItemBox>
      <S.TeacherItemBox>
        <div className="teacher_wrap">
          {teacherValue.map((item) => (
            <span key={item.teacher_id}>{item.name}</span>
          ))}
        </div>
        <div className="teacher_wrap">
          {teacherValue.map((item) => (
            <span key={item.teacher_id}>{item.name}</span>
          ))}
        </div>
        <div className="teacher_wrap">
          {teacherValue.map((item) => (
            <span key={item.teacher_id}>{item.name}</span>
          ))}
        </div>
      </S.TeacherItemBox>
    </S.TeacherInfoWrapper>
  );
};

export default TeacherItem;

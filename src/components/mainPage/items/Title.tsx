import React from "react";
import { useRecoilValue } from "recoil";
import { teacherId } from "../../../lib/api/axios";
import { teacherInfoSelector } from "../../../modules/selector/teacher";
import * as S from "./style";

const Title = () => {
  const info = useRecoilValue(teacherInfoSelector(teacherId));

  return (
    <S.Title>
      <span>{info?.name} 선생님은</span>
      <div className="title-item">
        <span>전공동아리</span>
        <span>자습감독이십니다.</span>
      </div>
    </S.Title>
  );
};

export default Title;

import React from "react";
import { StudentItem } from "../..";
import * as S from "./style";

const ContentList = () => {
  return (
    <S.StudentList>
      <ul className="sub-header">
        <li>선택</li>
        <li>학번</li>
        <li>이름</li>
        <li>8교시</li>
        <li>9교시</li>
        <li>10교시</li>
      </ul>
      <div className="student-list">
        <StudentItem />
        <StudentItem />
        <StudentItem />
        <StudentItem />
      </div>
    </S.StudentList>
  );
};

export default ContentList;

import React from "react";
import { useRecoilValue } from "recoil";
import { StudentItem } from "../..";
import { selectCount } from "../../../modules/atom/attendance";
import MoveModal from "../moveModal/MoveModal";
import * as S from "./style";

const ContentList = () => {
  const count = useRecoilValue(selectCount);

  return (
    <>
      <MoveModal />
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
        <span className="count">{count}명 선택됨</span>
      </S.StudentList>
    </>
  );
};

export default ContentList;

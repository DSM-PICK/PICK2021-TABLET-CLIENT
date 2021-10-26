import React, { useState } from "react";
import { StudentItem } from "../..";
import MoveModal from "../moveModal/MoveModal";
import * as S from "./style";

const ContentList = () => {
  const [selectCount, setSelectCount] = useState<number>(0);
  const [moveModal, setMoveModal] = useState<boolean>(false);

  return (
    <>
      <MoveModal moveModal={moveModal} setMoveModal={setMoveModal} />
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
          <StudentItem
            setMoveModal={setMoveModal}
            setSelectCount={setSelectCount}
            selectCount={selectCount}
          />
        </div>
        <span className="count">{selectCount}명 선택됨</span>
      </S.StudentList>
    </>
  );
};

export default ContentList;

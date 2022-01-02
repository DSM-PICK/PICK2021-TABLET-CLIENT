import React from "react";
import { useRecoilValue } from "recoil";
import { StudentItem } from "../..";
import { MajorDetailType } from "../../../lib/interface/major";
import { selectCount } from "../../../modules/atom/attendance";
import MoveModal from "../moveModal/MoveModal";
import * as S from "./style";

interface Props {
  info: MajorDetailType;
}

const ContentList = ({ info }: Props) => {
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
          {info?.count === 0 ? (
            <S.None>학생이 없습니다.</S.None>
          ) : (
            <>
              {info?.members.map((item) => (
                <StudentItem key={item.student_id} item={item} />
              ))}
              <span className="count">{count}명 선택됨</span>
            </>
          )}
        </div>
      </S.StudentList>
    </>
  );
};

export default ContentList;

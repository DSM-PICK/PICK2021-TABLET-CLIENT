import React, { useState } from "react";
import ListDeleteModal from "./ListDeleteModal";
import ListItem from "./ListItem";
import * as S from "./style";

const ListContainer = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <ListDeleteModal modal={modal} setModal={setModal} />
      <S.ListBoxWrapper>
        <S.ListHeader>
          <div className="std">
            <span>학번/이름</span>
          </div>
          <span className="state">상태</span>
          <span className="date">날짜</span>
          <span className="reason">사유</span>
          <span className="teacher">확인교사</span>
        </S.ListHeader>

        <S.ListContent>
          <ListItem setModal={setModal} modal={modal} />
        </S.ListContent>
      </S.ListBoxWrapper>
    </>
  );
};

export default ListContainer;

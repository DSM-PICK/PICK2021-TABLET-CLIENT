import React, { useState } from "react";
import ListDeleteModal from "./ListDeleteModal";
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
          <S.StdListItem onClick={() => setModal(!modal)}>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
          <S.StdListItem>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
          <S.StdListItem>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
          <S.StdListItem>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
          <S.StdListItem>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
          <S.StdListItem>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
          <S.StdListItem>
            <div className="std">
              <span>2201 강은빈</span>
            </div>
            <span className="state">외출</span>
            <span className="date">10월 24일 9교시~10월 24일 10교시</span>
            <span className="reason">병원</span>
            <span className="teacher">강은빈</span>
          </S.StdListItem>
        </S.ListContent>
      </S.ListBoxWrapper>
    </>
  );
};

export default ListContainer;

import React from "react";
import * as S from "./style";

const ContentHeader = () => {
  return (
    <S.ContentWrapper>
      <S.TitleWrapper>
        <span className="class-name">DMS</span>
        <span className="place">세미나실 (2-1)</span>
      </S.TitleWrapper>
      <S.SubTitleWrapper>
        <span>동아리 인원 : 20명</span>
        <span>부장 : 김재원</span>
      </S.SubTitleWrapper>
    </S.ContentWrapper>
  );
};

export default ContentHeader;

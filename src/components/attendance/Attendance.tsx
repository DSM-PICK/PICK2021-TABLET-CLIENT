import React from "react";
import { AttendanceClassBar, ContentHeader, Footer, Header } from "..";
import * as S from "./style";

const Attendance = () => {
  return (
    <>
      <S.MainWrapper>
        <Header />
        <Footer />
        <AttendanceClassBar />
        <AttendanceClassBar />
        <S.ContentWrapper>
          <ContentHeader />
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default Attendance;

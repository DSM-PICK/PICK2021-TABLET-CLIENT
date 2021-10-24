import React from "react";
import { AttendanceClassBar, Footer, Header } from "..";
import * as S from "./style";

const Attendance = () => {
  return (
    <>
      <S.MainWrapper>
        <Header />
        <Footer />
        <AttendanceClassBar />
        <AttendanceClassBar />
      </S.MainWrapper>
    </>
  );
};

export default Attendance;

import React, { useEffect, useRef, useState } from "react";
import { AttendanceChange, AttendanceSelect, Footer, Header, Title } from "..";
import * as S from "./style";

const MainPage = () => {
  return (
    <S.MainWrapper>
      <Header />
      <S.Container>
        <Title />
        <AttendanceSelect />
        <AttendanceChange />
        <AttendanceChange />
      </S.Container>
      <Footer />
    </S.MainWrapper>
  );
};

export default MainPage;

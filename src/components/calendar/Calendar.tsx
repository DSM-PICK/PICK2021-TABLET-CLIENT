import React from "react";
import { CalendarContent, CalendarHead, Footer, Header } from "..";
import * as S from "./style";

const Calendar = () => {
    
  return (
    <S.CalendarWrap>
      <Header />
      <S.Container>
        <CalendarHead />
        <CalendarContent />
      </S.Container>
      <Footer />
    </S.CalendarWrap>
  );
};

export default Calendar;

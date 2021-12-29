import React from "react";
import {
  CalendarChangeBtn,
  CalendarContent,
  CalendarHead,
  Footer,
  Header,
} from "..";
import ChangeModal from "./clendarChange/modal";
import * as S from "./style";

const Calendar = () => {
  
  return (
    <S.CalendarWrap>
      <ChangeModal />
      <Header />
      <S.Container>
        <CalendarHead />
        <CalendarContent />
        <CalendarChangeBtn />
      </S.Container>
      <Footer />
    </S.CalendarWrap>
  );
};

export default Calendar;

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AttendanceClassBar,
  ContentHeader,
  ContentList,
  Footer,
  Header,
} from "..";
import scheduleApi from "../../lib/api/schedule/scheduleApi";
import * as S from "./style";

const Attendance = () => {
  const test = async () => {
    const data = await scheduleApi.getScheduleName();

    console.log(data);
    return data;
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <S.MainWrapper>
        <Header />
        <Footer />
        <AttendanceClassBar />
        <AttendanceClassBar />
        <S.ContentWrapper>
          <ContentHeader />
          <ContentList />
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default Attendance;

import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  LocationBar,
  ContentHeader,
  ContentList,
  Footer,
  Header,
  LocationDetailBar,
} from "..";
import { majorDetailSelector } from "../../modules/selector/major";
import * as S from "./style";
import QueryString from "query-string";
import { useEffect } from "react";

const Attendance = () => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const attendanceInfo = useRecoilValue(majorDetailSelector(id));

  useEffect(() => {
    console.log(attendanceInfo);
  }, [attendanceInfo]);

  return (
    <>
      <S.MainWrapper>
        <Header />
        <Footer />
        <LocationBar />
        <LocationDetailBar />
        <S.ContentWrapper>
          <ContentHeader info={attendanceInfo} />
          <ContentList info={attendanceInfo} />
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default Attendance;

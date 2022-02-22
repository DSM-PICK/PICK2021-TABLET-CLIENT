import { useLocation } from "react-router-dom";
import {
  LocationBar,
  ContentHeader,
  ContentList,
  Footer,
  Header,
  LocationDetailBar,
} from "..";
import * as S from "./style";
import QueryString from "query-string";
import { useQuery } from "react-query";
import major from "../../lib/api/majorClub";

const Attendance = () => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const { data: attendanceMajorValue } = useQuery(
    ["attendance_major_value", id],
    () => major.getMajorDetail(id),
    {
      enabled: !!id,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return (
    <>
      <S.MainWrapper>
        <Header />
        <Footer />
        <LocationBar />
        <LocationDetailBar />
        <S.ContentWrapper>
          <ContentHeader info={attendanceMajorValue?.data} />
          <ContentList info={attendanceMajorValue?.data} />
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default Attendance;

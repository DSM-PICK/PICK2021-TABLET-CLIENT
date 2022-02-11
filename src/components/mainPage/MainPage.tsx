import {
  AttendanceChange,
  AttendanceChangeList,
  AttendanceSelect,
  Footer,
  Header,
  Title,
} from "..";
import * as S from "./style";

const MainPage = () => {
  return (
    <S.MainWrapper>
      <Header />
      <S.Container>
        <Title />
        <AttendanceSelect />
        <AttendanceChange />
        <AttendanceChangeList />
      </S.Container>
      <Footer />
    </S.MainWrapper>
  );
};

export default MainPage;

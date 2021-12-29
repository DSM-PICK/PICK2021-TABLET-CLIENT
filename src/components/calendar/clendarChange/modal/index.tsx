import { useRecoilState } from "recoil";
import { modal } from "../../../../modules/atom/schedule";
import ScheduleItem from "./item/ScheduleItem";
import TeacherItem from "./item/TeacherItem";
import * as S from "./style";

const ChangeModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modal);

  return (
    <S.ChangeWrapper modalOpen={modalOpen}>
      <h1>일정 관리</h1>
      <span className="date">2021년 2월 18일</span>
      <TeacherItem />
      <ScheduleItem />
      <S.ButtonWrapper>
        <button onClick={() => setModalOpen(false)}>취소</button>
        <button onClick={() => setModalOpen(false)}>일정 교체</button>
      </S.ButtonWrapper>
    </S.ChangeWrapper>
  );
};
export default ChangeModal;

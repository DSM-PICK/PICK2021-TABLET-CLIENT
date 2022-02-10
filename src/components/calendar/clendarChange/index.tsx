import { useRecoilState, useRecoilValue } from "recoil";
import { modal } from "../../../modules/atom/schedule";
import ScheduleItem from "./item/ScheduleItem";
import TeacherItem from "./item/TeacherItem";
import * as S from "./style";
import schedule from "../../../lib/api/schedule/scheduleApi";
import { date, dateValue, scheduleState } from "../../../modules/atom/calendar";
import { DateChangeHook } from "../../../lib/hook/dateChangeHook";
import { ToastError, ToastSuccess } from "../../../lib/hook/toastHook";
import { useMutation, useQueryClient } from "react-query";

const ChangeModal = () => {
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useRecoilState(modal);
  const [state, setState] = useRecoilState(scheduleState);
  const _date = useRecoilValue(date);

  const { mutate: patchScheduleHandle } = useMutation(
    () => schedule.patchSchedule(_date.format("YYYY-MM-DD"), state),
    {
      onSuccess: () => {
        setModalOpen(false);
        queryClient.invalidateQueries("schedule_list");
        ToastSuccess("일정이 변경되었습니다.");
      },
      onError: () => {
        setModalOpen(true);
        ToastError("일정 변경에 실패했습니다.");
      },
    }
  );

  return (
    <>
      <S.ChangeWrapper modalOpen={modalOpen}>
        <h1>일정 관리</h1>
        <span className="date">{DateChangeHook(_date.format("YYYY-MM-DD"))}</span>
        <TeacherItem />
        <ScheduleItem />
        <S.ButtonWrapper>
          <button onClick={() => setModalOpen(false)}>취소</button>
          <button onClick={() => patchScheduleHandle()}>일정 교체</button>
        </S.ButtonWrapper>
      </S.ChangeWrapper>
    </>
  );
};
export default ChangeModal;

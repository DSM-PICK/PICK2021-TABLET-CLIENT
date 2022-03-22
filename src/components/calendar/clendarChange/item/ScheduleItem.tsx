import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { StateChangeHook } from "../../../../lib/hook/stateChangeHook";
import { date } from "../../../../modules/atom/calendar";
import * as S from "../style";
import schedule from "../../../../lib/api/schedule/scheduleApi";
import { modal } from "../../../../modules/atom/schedule";
import { ToastError, ToastSuccess } from "../../../../lib/hook/\btoastHook";

const ScheduleItem = () => {
  const queryClient = useQueryClient();
  const baseDate = useRecoilValue(date);
  const [modalOpen, setModalOpen] = useRecoilState(modal);

  // 일정에 대한 state : 방과후 / 동아리 / 자습
  const { data: stateValue } = useQuery(
    ["state_value", baseDate],
    () => schedule.getScheduleDate(baseDate.format("YYYY-MM-DD")),
    {
      enabled: !!baseDate && modalOpen,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  const { mutate: patchScheduleHandle } = useMutation(
    (state: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL") =>
      schedule.patchSchedule(baseDate.format("YYYY-MM-DD"), state),
    {
      onSuccess: () => {
        setModalOpen(false);
        queryClient.invalidateQueries("state_value");
        queryClient.invalidateQueries("scehdule_list");
        ToastSuccess("일정이 변경되었습니다.");
      },
      onError: () => {
        setModalOpen(true);
        ToastError("일정 변경에 실패했습니다.");
      },
    }
  );

  return (
    <S.StateWrapper>
      <div className="state_wrap">
        <span>{StateChangeHook(stateValue?.data?.name)}</span>
      </div>
      <ul className="state_list">
        <li onClick={() => patchScheduleHandle("SELF_STUDY")}>자습</li>
        <li onClick={() => patchScheduleHandle("AFTER_SCHOOL")}>방과후</li>
        <li onClick={() => patchScheduleHandle("MAJOR")}>동아리</li>
      </ul>
    </S.StateWrapper>
  );
};

export default ScheduleItem;

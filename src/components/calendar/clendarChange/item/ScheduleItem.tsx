import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { StateChangeHook } from "../../../../lib/hook/stateChangeHook";
import {
  date,
  dateValue,
  scheduleState,
} from "../../../../modules/atom/calendar";
import * as S from "../style";
import schedule from "../../../../lib/api/schedule/scheduleApi";

const ScheduleItem = () => {
  const [baseDate, setBaseDate] = useRecoilState(date);
  const [state, setState] = useRecoilState(scheduleState);

  // 일정에 대한 state : 방과후 / 동아리 / 자습
  const { data: stateValue } = useQuery(
    ["state_value", state],
    () => schedule.getScheduleDate(baseDate.format("YYYY-MM-DD")),
    {
      enabled: !!state,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  console.log(baseDate.format("YYYY-MM-DD"));

  return (
    <S.StateWrapper>
      <div className="state_wrap">
        <span>{StateChangeHook(stateValue?.data)}</span>
      </div>
      <ul className="state_list">
        <li onClick={() => setState("SELF_STUDY")}>자습</li>
        <li onClick={() => setState("AFTER_SCHOOL")}>방과후</li>
        <li onClick={() => setState("MAJOR")}>동아리</li>
      </ul>
    </S.StateWrapper>
  );
};

export default ScheduleItem;

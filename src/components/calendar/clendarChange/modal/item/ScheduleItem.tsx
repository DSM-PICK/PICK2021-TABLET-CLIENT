import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { StateChangeHook } from "../../../../../lib/hook/stateChangeHook";
import { dateValue, scheduleState } from "../../../../../modules/atom/calendar";
import { scheduleDateSelector } from "../../../../../modules/selector/schedule";
import * as S from "../style";

const ScheduleItem = () => {
  const [state, setState] = useRecoilState(scheduleState);
  const [dateContent, setDateContent] = useRecoilState(dateValue);
  const stateValue = useRecoilValue(scheduleDateSelector(dateContent));

  useEffect(() => {
    setState(stateValue?.name);
    console.log(stateValue);
  }, [setState, stateValue]);

  return (
    <S.StateWrapper>
      <div className="state_wrap">
        <span>{StateChangeHook(state)}</span>
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

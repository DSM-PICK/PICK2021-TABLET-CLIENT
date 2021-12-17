import React from "react";
import * as S from "./style";

const CalendarChangeBtn = () => {
  return (
    <S.ChangerBtnWrap>
      <div className="item_center">
        일정 교체를 원하시면 일정 교체를 선택한 후
        <br /> 변경하실 일정을 선택해주세요.
      </div>
      <button>일정 교체</button>
    </S.ChangerBtnWrap>
  );
};

export default CalendarChangeBtn;

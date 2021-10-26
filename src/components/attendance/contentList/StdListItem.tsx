import React, { useState } from "react";
import StateContainer from "./StateContainer";
import * as S from "./style";

interface Props {
  setSelectCount: any;
  selectCount: number;
  setMoveModal: any;
}

const StdListItem = ({ setSelectCount, selectCount, setMoveModal }: Props) => {
  const [check, setCheck] = useState<boolean>(false); //input check

  const std = ["8교시", "9교시", "10교시"];

  return (
    <>
      <S.StudentItem check={check}>
        <div className="checkbox">
          <div
            onClick={() => {
              setCheck(!check);
              check
                ? setSelectCount(selectCount - 1)
                : setSelectCount(selectCount + 1);
            }}
          />
        </div>
        <span>2201</span>
        <span>강은빈</span>
        {std.map((_, index) => (
          <StateContainer key={index} setMoveModal={setMoveModal} />
        ))}
      </S.StudentItem>
    </>
  );
};

export default StdListItem;

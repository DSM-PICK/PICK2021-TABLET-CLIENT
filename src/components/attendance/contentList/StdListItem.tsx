import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { selectCount } from "../../../modules/atom/attendance";
import StateContainer from "./StateContainer";
import * as S from "./style";

const StdListItem = () => {
  const [count, setCount] = useRecoilState<number>(selectCount);
  const [check, setCheck] = useState<boolean>(false); //input check

  const std = ["8교시", "9교시", "10교시"];

  return (
    <>
      <S.StudentItem check={check}>
        <div className="checkbox">
          <div
            onClick={() => {
              setCheck(!check);
              check ? setCount(count - 1) : setCount(count + 1);
            }}
          />
        </div>
        <span>2201</span>
        <span>강은빈</span>
        {std.map((_, index) => (
          <StateContainer key={index} />
        ))}
      </S.StudentItem>
    </>
  );
};

export default StdListItem;

import { useState } from "react";
import { useRecoilState } from "recoil";
import { MemberType } from "../../../lib/interface/major";
import { selectCount } from "../../../modules/atom/attendance";
import StateContainer from "./StateContainer";
import * as S from "./style";

interface Props {
  item: MemberType;
}

const StdListItem = ({ item }: Props) => {
  const [count, setCount] = useRecoilState<number>(selectCount);
  const [check, setCheck] = useState<boolean>(false);

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
        <span>{item.gcn}</span>
        <span>{item.student_name}</span>
        {std.map((_, index) => (
          <StateContainer key={index} />
        ))}
      </S.StudentItem>
    </>
  );
};

export default StdListItem;

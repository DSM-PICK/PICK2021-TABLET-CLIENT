import React, { useEffect, useState } from "react";
import StateList from "./StateListItem";
import * as S from "./style";

interface Props {
  setMoveModal: any;
}

const StateContainer = ({ setMoveModal }: Props) => {
  const [stateSelect, setStateSelect] = useState<boolean>(false);
  const [state, setState] = useState<string>("");

  const list = ["출석", "이동", "외출", "무단", "현체", "귀가"];

  useEffect(() => {
    state === "이동" ? setMoveModal(true) : setMoveModal(false);
  }, [setMoveModal, state]);

  return (
    <S.StateWrapper state={state}>
      <div className="state" onClick={() => setStateSelect(!stateSelect)}>
        <span>{state}</span>
      </div>

      <S.StateSelectWrapper stateSelect={stateSelect}>
        {list.map((item, index) => (
          <StateList
            key={index}
            item={item}
            setState={setState}
            setStateSelect={setStateSelect}
            stateSelect={stateSelect}
          />
        ))}
      </S.StateSelectWrapper>
    </S.StateWrapper>
  );
};

export default StateContainer;

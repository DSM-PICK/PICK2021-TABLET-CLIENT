import React from "react";

interface Props {
  setStateSelect: any;
  setState: any;
  stateSelect: boolean;
  item: string;
}

const StateListItem = (props: Props) => {
  return (
    <li
      onClick={() => {
        props.setState(props.item);
        props.setStateSelect(!props.stateSelect);
      }}
    >
      {props.item}
    </li>
  );
};

export default StateListItem;

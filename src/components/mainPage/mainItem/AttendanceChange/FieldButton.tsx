import React from "react";
import { MainColor } from "../../../../utils/color/color";
import { FieldButtonType } from "../../../../lib/interface/Attendance/FieldButtonType";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { attendanceData } from "../../../../modules/atom/attendance";

interface Props {
  item: FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const FieldButton = (props: Props) => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);

  const onChange = (field: string) => {
    setAttendance({
      ...attendance,
      state: field,
    });
  };

  return (
    <S.FieldButton
      onClick={() => {
        props.selectedHandlerColor(props.item);
        onChange(props.item.name);
      }}
      style={{
        background: props.item.id === props.selected ? `${MainColor}` : "",
        color: props.item.id === props.selected ? "white" : "black",
      }}
    >
      {props.item.name}
    </S.FieldButton>
  );
};

export default FieldButton;

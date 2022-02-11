import { MainColor } from "../../../utils/color/color";
import { FieldButtonType } from "../../../lib/interface/Attendance/FieldButtonType";
import { useRecoilState } from "recoil";
import { attendanceData } from "../../../modules/atom/attendance";
import styled from "@emotion/styled";

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
    <FieldButtonWrap
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
    </FieldButtonWrap>
  );
};

const FieldButtonWrap = styled.span`
  padding: 9px 15px;
  border-radius: 3px;
  font-size: 17px;
`;

export default FieldButton;

import { MainColor } from "../../../utils/color/color";
import * as S from "./style";
import { LocationType } from "../../../lib/interface/location";
import { FieldButtonType } from "../../../lib/interface/Attendance/FieldButtonType";

interface Props {
  item: LocationType | FieldButtonType;
  selected: number;
  selectedHandlerColor: any;
}

const SelectItem = ({ item, selected, selectedHandlerColor }: Props) => {
  const locationClickHandle = () => {
    selectedHandlerColor(item);
  };

  return (
    <S.SelectItem
      onClick={locationClickHandle}
      style={
        selected === item.id
          ? { backgroundColor: `${MainColor}`, color: "white" }
          : { backgroundColor: "", color: "black" }
      }
    >
      {item.name}
    </S.SelectItem>
  );
};

export default SelectItem;

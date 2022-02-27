import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  ClassButtonList,
  FieldButtonType,
} from "../../../lib/interface/Attendance/FieldButtonType";
import { floorData } from "../../../modules/atom/attendance";
import { LoactionId } from "../../../modules/atom/location";
import SelectItem from "./SelectItem";
import * as S from "./style";

const LocationBar = () => {
  const [selected, setSelected] = useState<number>(2);
  const setFloor = useSetRecoilState(floorData);
  const { push } = useHistory();
  const { locationId } = useRecoilValue(LoactionId);

  const selectedHandlerColor = (item: FieldButtonType) => {
    push(`/attendance?floor=${item.floor}&id=${Number(locationId)}`);
    setSelected(item.id);
    setFloor(item?.floor);
  };

  return (
    <S.SelectBarWrapper>
      {ClassButtonList.map((item: FieldButtonType) => (
        <SelectItem
          key={item.id}
          item={item}
          selected={selected}
          selectedHandlerColor={selectedHandlerColor}
        />
      ))}
    </S.SelectBarWrapper>
  );
};

export default LocationBar;

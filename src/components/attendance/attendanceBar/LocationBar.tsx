import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ClassButtonList } from "../../../lib/interface/Attendance/FieldButtonType";
import { LocationType } from "../../../lib/interface/location";
import { FloorId } from "../../../modules/atom/location";
import { locationListSelector } from "../../../modules/selector/location";
import SelectItem from "./SelectItem";
import * as S from "./style";

const LocationBar = () => {
  const [selected, setSelected] = useState<number>(1);
  const [floor, setFloor] = useRecoilState(FloorId);
  // const location = useRecoilValue(locationListSelector);

  useEffect(() => {
     console.log(floor);
  }, [floor]);

  const selectedHandlerColor = (item: LocationType) => {
    setSelected(item.id);
    setFloor(item.id);
  };

  return (
    <S.SelectBarWrapper>
      {ClassButtonList.map((item: LocationType) => (
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

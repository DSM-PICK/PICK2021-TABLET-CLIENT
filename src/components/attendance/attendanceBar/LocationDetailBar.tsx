import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { LocationType } from "../../../lib/interface/location";
import { locationFloorSelector } from "../../../modules/selector/location";
import SelectItem from "./SelectItem";
import * as S from "./style";
import QueryString from "query-string";
import { floorData } from "../../../modules/atom/attendance";

const LocationDetailBar = () => {
  const [selected, setSelected] = useState<number>(1);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const floor: any = queryData.floor;

  const place = useRecoilValue(locationFloorSelector(floor));

  const selectedHandlerColor = (item: LocationType) => {
    setSelected(item.id);
  };

  return (
    <S.SelectBarWrapper>
      {place?.map((item: LocationType) => (
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

export default LocationDetailBar;

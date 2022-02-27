import { useLocation } from "react-router-dom";
import {
  LocationBar,
  ContentHeader,
  ContentList,
  Footer,
  Header,
  LocationDetailBar,
} from "..";
import * as S from "./style";
import QueryString from "query-string";
import { useQuery } from "react-query";
import major from "../../lib/api/majorClub";
import { useRecoilState } from "recoil";
import { checkList_atom } from "../../modules/atom/attendance/studentAttendance";
import { useState } from "react";
import { MainColor } from "../../utils/color/color";
import MoveModal from "./moveModal/MoveModal";

const Attendance = () => {
  const [isChecked, setIsChecked] = useState(false); // 체크 여부
  const [checkedItems, setCheckedItems] = useRecoilState(checkList_atom); // 체크된 요소들
  //const [selectValue, setSelectValue] = useRecoilState(selectValue_atom);

  const location = useLocation();
  const queryData = QueryString.parse(location.search);
  const id: any = queryData.id;

  const { data: attendanceMajorValue } = useQuery(
    ["attendance_major_value", id],
    () => major.getMajorDetail(id),
    {
      enabled: !!id,
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  const checkHandle = (e: any) => {
    setIsChecked(!isChecked);

    checkItemHandle(e.target.parentNode, e.target.value, e.target.checked);
  };

  // 학생을 배열에 추가한다.
  // 배ㅑㄹ테
  const checkItemHandle = (box: any, id: number, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.concat(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = MainColor;
    } else if (!isChecked && checkedItems.filter(id)) {
      checkedItems.filter(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#fff";
    }

    return checkedItems;
  };

  console.log(checkedItems);

  return (
    <>
      <S.MainWrapper>
        <MoveModal />
        <Header />
        <Footer />
        <LocationBar />
        <LocationDetailBar />
        <S.ContentWrapper>
          <ContentHeader info={attendanceMajorValue?.data} />
          <ContentList
            info={attendanceMajorValue?.data}
            checkHandle={checkHandle}
          />
        </S.ContentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default Attendance;

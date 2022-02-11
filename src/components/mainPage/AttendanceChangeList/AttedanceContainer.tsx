import { useState } from "react";
import ListDeleteModal from "./AttedanceDelete";
import ListItem from "./AttedanceItem";
import attendance from "../../../lib/api/attendance";
import * as S from "./style";
import { useQuery } from "react-query";
import { AttendanceType } from "../../../lib/interface/Attendance";
import { BarLoader } from "react-spinners";
import { MainColor } from "../../../utils/color/color";

const ListContainer = () => {
  const [modal, setModal] = useState<boolean>(false);

  const { data: attendanceListValue, isLoading } = useQuery(
    ["attendance_list_value"],
    () => attendance.getAttendance(),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  if (isLoading)
    return (
      <BarLoader
        color={MainColor}
        height="4px"
        width="100%"
        speedMultiplier={0.5}
      />
    );

  return (
    <>
      <ListDeleteModal modal={modal} setModal={setModal} />
      <S.ListBoxWrapper>
        <S.ListHeader>
          <div className="std">
            <span>학번/이름</span>
          </div>
          <span className="state">상태</span>
          <span className="date">날짜</span>
          <span className="reason">사유</span>
          <span className="teacher">확인교사</span>
        </S.ListHeader>

        <S.ListContent>
          {attendanceListValue?.data?.map((item: AttendanceType) => (
            <ListItem setModal={setModal} modal={modal} item={item} />
          ))}
        </S.ListContent>
      </S.ListBoxWrapper>
    </>
  );
};

export default ListContainer;

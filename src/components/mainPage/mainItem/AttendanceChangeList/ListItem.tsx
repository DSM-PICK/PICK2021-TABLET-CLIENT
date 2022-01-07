import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DatePeriodHook } from "../../../../lib/hook/dateChangeHook";
import { AttendanceType } from "../../../../lib/interface/Attendance";
import AttendanceReducer from "../../../../modules/_reducers/userReducer/attendanceReducer";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: ({}: boolean) => void;
  item: AttendanceType;
}

const ListItem = ({ modal, setModal, item }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(AttendanceReducer());
  }, [dispatch]);

  return (
    <>
      <S.StdListItem onClick={() => setModal(!modal)}>
        <div className="std">
          <span>
            {item?.student?.gcn} {item?.student?.name}
          </span>
        </div>
        <span className="state">{item.state}</span>
        <span className="date">{DatePeriodHook(item.term)}</span>
        <span className="reason">{item.reason}</span>
        <span className="teacher"></span>
      </S.StdListItem>
    </>
  );
};

export default ListItem;

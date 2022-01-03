import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DatePeriodHook } from "../../../../lib/hook/dateChangeHook";
import { AttendanceType } from "../../../../lib/interface/Attendance";
import AttendanceReducer from "../../../../modules/_reducers/userReducer/attendanceReducer";
import ListDeleteModal from "./ListDeleteModal";
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
      <ListDeleteModal modal={modal} setModal={setModal} />
      <S.StdListItem onClick={() => setModal(!modal)}>
        <div className="std">
          <span>2201 강은빈</span>
        </div>
        <span className="state">{item.state}</span>
        <span className="date">{DatePeriodHook(item.term)}</span>
        <span className="reason">{item.reason}</span>
        <span className="teacher">강은빈</span>
      </S.StdListItem>
    </>
  );
};

export default ListItem;

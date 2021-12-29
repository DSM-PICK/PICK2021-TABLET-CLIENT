import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AttendanceReducer from "../../../../modules/_reducers/userReducer/attendanceReducer";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: ({}: boolean) => void;
}

const ListItem = ({ modal, setModal }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(AttendanceReducer());
  }, [dispatch]);

  return (
    <S.StdListItem onClick={() => setModal(!modal)}>
      <div className="std">
        <span>2201 강은빈</span>
      </div>
      <span className="state">외출</span>
      <span className="date">10월 24일 9교시~10월 24일 10교시</span>
      <span className="reason">병원</span>
      <span className="teacher">강은빈</span>
    </S.StdListItem>
  );
};

export default ListItem;

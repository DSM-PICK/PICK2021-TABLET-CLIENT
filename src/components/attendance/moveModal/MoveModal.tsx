import { useState } from "react";
import { useRecoilState } from "recoil";
import { moveModal } from "../../../modules/atom/attendance/index";
import { Close } from "../../../utils/assets";
import * as S from "./style";

const MoveModal = () => {
  const [selected, setSelected] = useState<number>(0);
  const [modal, setModal] = useRecoilState<boolean>(moveModal);

  const place = [
    {
      id: 1,
      place: "2층",
    },
    {
      id: 2,
      place: "3층",
    },
    {
      id: 3,
      place: "4층",
    },
    {
      id: 4,
      place: "5층",
    },
    {
      id: 5,
      place: "특별실",
    },
    {
      id: 6,
      place: "직접입력",
    },
  ];

  return (
    <S.ModalWrapper modal={modal}>
      <S.ModalBox>
        <h1>이동 교실 선택</h1>
        <img src={Close} alt="닫기 아이콘" onClick={() => setModal(false)} />
        <S.PlaceWrapper>
          <S.Placebar>
            <span>2201 강은빈</span>
            <ul>
              {place.map((place, index) => (
                <li
                  key={index}
                  onClick={() => setSelected(place.id)}
                  style={{ color: place.id === selected ? "#267dff" : "" }}
                >
                  {place.place}
                </li>
              ))}
            </ul>
          </S.Placebar>
          <S.PlaceContent></S.PlaceContent>
        </S.PlaceWrapper>
        <S.AttendanceButton>
          <span>2201 강은빈 학생 이동교실을 선택해주세요!</span>
          <button>출석하기</button>
        </S.AttendanceButton>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default MoveModal;

import React from "react";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: any;
}

const ListDeleteModal = ({ modal, setModal }: Props) => {
  return (
    <S.ModalWrapper modal={modal}>
      <div className="box"></div>
    </S.ModalWrapper>
  );
};

export default ListDeleteModal;

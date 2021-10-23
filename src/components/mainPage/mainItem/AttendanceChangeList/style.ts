import styled from "@emotion/styled";
import { AttendanceChangeWrapper } from "../AttendanceChange/style";

interface Props {
  modal: boolean;
}

export const MainWrapper = styled(AttendanceChangeWrapper)``;

export const SelectButtonWrapper = styled.div`
  margin: 20px 0;
`;

export const ItemButton = styled.span`
  font-size: 22px;
  padding-bottom: 3px;
  margin-right: 15px;
  color: #818181;
`;

export const ListBoxWrapper = styled.div`
  width: 100%;
  height: 230px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 3px 9px rgba(169, 169, 169, 0.25);
  border-radius: 3px;
  text-align: center;

  .std {
    width: 20%;
  }

  .state {
    width: 10%;
  }

  .date {
    width: 45%;
  }

  .teacher {
    width: 10%;
  }

  .reason {
    width: 15%;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const ListContent = styled.div`
  margin-top: 15px;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 82%;
`;

export const StdListItem = styled.div`
  display: flex;
  margin-bottom: 13px;
  font-size: 17px;
`;

export const ModalWrapper = styled.div<Props>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.44);
  display: ${({ modal }) => (modal ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  .box {
    width: 400px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.25);
  }
`;

import styled from "@emotion/styled";
import { MainColor } from "../../../utils/color/color";

interface Props {
  modalOpen?: boolean;
}

export const ChangeWrapper = styled.div<Props>`
  display: flex;
  transform: ${({ modalOpen }) => (modalOpen ? "translateX(0)" : "translateX(800px)")};
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 100vh;
  background: #ffffff;
  box-shadow: -7px 0px 14px rgba(164, 164, 164, 0.25);
  position: absolute;
  z-index: 3;
  right: 0;
  padding: 4rem;
  box-sizing: border-box;
  transition: all 1s;

  .date {
    font-size: 22px;
  }
`;

export const TeacherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FloorItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  padding: 2rem 0;

  .teacher_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    span:nth-of-type(1) {
      font-size: 20px;
      margin-bottom: 5px;
    }
    span:nth-of-type(2) {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

export const TeacherItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;

  .teacher_wrap {
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: scroll;

    span {
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    padding: 8px 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    weight: 100%;
    background: #e6e6e6;
    box-shadow: 0px 1px 8px rgba(142, 142, 142, 0.25);
    border-radius: 5px;
    outline: none;
    border: none;
    color: white;
    font-size: 18px;
  }

  button:nth-of-type(2) {
    background: ${MainColor};
  }
`;

export const StateWrapper = styled.div`
  .state_wrap {
    padding: 10px 0;
    border-bottom: 1px solid #dfdfdf;

    & span {
      font-size: 24px;
      font-weight: 600;
    }
  }

  .state_list {
    display: flex;
    flex-direction: column;

    & li {
      padding: 10px 0;
      font-size: 20px;
    }
  }
`;

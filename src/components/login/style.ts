import styled from "@emotion/styled";
import { MainColor } from "../../utils/color/color";

interface Props {
  btnColor: boolean;
}

export const LoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.form<Props>`
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: 70%;
    margin: 0 auto;
  }

  .input_box {
    display: flex;
    flex-direction: column;

    & input {
      font-family: "Noto Sans KR", sans-serif;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #c9c9c9;
      font-size: 16px;
    }
  }

  & button {
    padding: 15px;
    background: ${({ btnColor }) => (btnColor ? "#277dfe" : "#f1f1f1")};
    color: ${({ btnColor }) => (btnColor ? "white" : "")};
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 25%);
    font-size: 16px;
    transition: all 0.5s;
  }
`;

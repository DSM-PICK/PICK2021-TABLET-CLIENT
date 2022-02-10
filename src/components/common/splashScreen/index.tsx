import { PickMainLogo } from "../../../utils/assets";
import * as S from "./style";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
  const { push } = useHistory();

  return (
    <S.MainWrapper
      onClick={() => {
        push("/login");
      }}
    >
      <img src={PickMainLogo} alt="" />

      <span>화면을 클릭해주세요.</span>
    </S.MainWrapper>
  );
};

export default FirstPage;

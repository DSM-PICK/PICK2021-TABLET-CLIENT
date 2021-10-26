import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../utils/assets";
import LogoutModal from "./LogoutModal";
import * as S from "./style";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <LogoutModal modal={modal} setModal={setModal} />
      <S.HeaderWrapper>
        <Link to="/">
          <img src={Logo} alt="pick로고" title="pick로고" />
        </Link>
        <span onClick={() => setModal(!modal)}>강은빈 선생님</span>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;

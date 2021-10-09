import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../utils/assets";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <img src={Logo} alt="pick로고" title="pick로고" />
      </Link>
      <span>로그아웃</span>
    </S.HeaderWrapper>
  );
};

export default Header;

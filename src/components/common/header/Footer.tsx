import React from "react";
import { NavCalendarIcon, NavHomeIcon } from "../../../utils/assets";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <img src={NavHomeIcon} alt="" />
      <img src={NavCalendarIcon} alt="" />
    </S.FooterWrapper>
  );
};

export default Footer;

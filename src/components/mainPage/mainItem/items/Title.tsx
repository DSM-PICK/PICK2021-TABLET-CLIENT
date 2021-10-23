import React from "react";
import * as S from "./style";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <S.Title>{title}</S.Title>;
};

export default Title;

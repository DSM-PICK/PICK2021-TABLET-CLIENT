import styled from "@emotion/styled";
import { HeadFootColor, MainColor } from "../../utils/color/color";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${HeadFootColor};
  display: flex;
  align-items: center;
  justify-content: center;
  
  a > img {
    width: 200px;
  }

  span {
    position: absolute;
    right: 0;
    margin: 0 30px;
    font-size: 22px;
    color: ${MainColor};
  }
`;

export const FooterWrapper = styled(HeaderWrapper)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

import styled from "@emotion/styled";
import { MainColor } from "../../../utils/color/color";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  margin: 60px 0px;

  span {
    font-weight: bold;
  }

  .title-item {
    display: flex;
    flex-direction: row;

    span:nth-child(1) {
      font-weight: 800;
      color: ${MainColor};
    }
  }
`;

export const AttendanceSelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 4px 10px #e5e5e5;
  }
  span {
    position: absolute;
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;

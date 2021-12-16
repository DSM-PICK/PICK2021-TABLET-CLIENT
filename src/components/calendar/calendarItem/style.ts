import styled from "@emotion/styled";
import { MainColor } from "../../../utils/color/color";

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .date {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 700;

    & span:nth-of-type(2) {
      margin-top: 5px;
      font-size: 20px;
    }
  }

  & button {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #8080802b;
    background-color: none;
  }
`;

export const CalendarWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 88%;
`;

export const CalendarDate = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;

  li {
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-wrap: flex-wrap;
  flex-direction: column;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e5e5e5;

    .selected {
      span {
        color: ${MainColor};
      }
    }

    .grayed {
      span {
        color: #b5b5b5;
      }
    }

    .box {
      width: calc(100% / 7);
      padding: 0.5rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      .date_more {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .teacher_list {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

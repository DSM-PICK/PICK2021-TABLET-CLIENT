import styled from "@emotion/styled";

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

    & span:nth-child(2) {
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
  height: 600px;
  border: 1px solid red;
`;

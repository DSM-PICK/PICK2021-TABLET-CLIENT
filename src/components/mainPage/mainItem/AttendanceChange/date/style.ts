import styled from "@emotion/styled";

interface Props {
  clendarOne: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
`;

export const CalendarWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

export const DateWrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .date_item_wrap {
    display: flex;
    flex-direction: row;

    span {
      margin-left: 5px;
    }

    .date_period {
      display: flex;
      flex-direction: row;

      & input {
        width: 25px;
        text-align: end;
        border: none;
        font-size: 18px;
      }
    }
  }

  label {
    display: ${({ clendarOne }) => (clendarOne ? "flex" : "none")};
  }
`;

import styled from "@emotion/styled";
import { BoxColor, MainColor } from "../../../../utils/color/color";

interface Props {
  clendarOne: boolean;
}

export const AttendanceChangeWrapper = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 33%;
`;

export const ChangeBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 80%;
  background: ${BoxColor};
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(210, 210, 210, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Enrollment = styled.form`
  width: 55%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .enrollment-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .field-item {
      display: flex;
    }

    .react-datepicker-wrapper {
      width: auto;
    }

    .example-custom-input {
      background: white;
      border: none;
    }

    .text-input {
      border-bottom: 1px solid black;
      outline: none;
      border: none;
      text-align: center;
      font-size: 18px;
    }
  }
`;

export const FieldButton = styled.span`
  padding: 9px 15px;
  border-radius: 3px;
  font-size: 17px;
`;

export const SaveButton = styled.button`
  outline: none;
  border: none;
  background-color: ${MainColor};
  padding: 0 15px;
  font-size: 17px;
  color: white;
  border-radius: 3px;
  margin: 2px 0;
`;

export const EnrollmentHistory = styled.div`
  width: 35%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .history-list-wrapper {
    overflow: auto;
    margin-bottom: 7px;
  }

  .history-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    padding: 3px 0;

    .std-info {
      width: 50%;

      span:nth-of-type(1) {
        margin-right: 10px;
      }
    }

    img {
      width: 15px;
    }
  }

  & button {
    padding: 6px 0;
    outline: none;
    border: none;
    border-radius: 3px;
    width: 100%;
    background: ${MainColor};
    font-size: 18px;
    color: white;
  }
`;

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

export const HistoryItem = styled.div``;

export const DateWrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;

  .date_item_wrap {
    display: flex;
    flex-direction: row;
  }

  label {
    display: ${({ clendarOne }) => (clendarOne ? "flex" : "none")};
  }
`;

import styled from "@emotion/styled";
import { BoxColor, MainColor } from "../../../../utils/color/color";

export const AttendanceChangeWrapper = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 33%;

  h1 {
    font-size: 24px;
    padding-bottom: 3px;
    border-bottom: 3px solid ${MainColor};
    width: fit-content;
  }
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

export const Enrollment = styled.div`
  width: 55%;
  height: 70%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .enrollment-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .field-item {
      display: flex;
      span {
        padding: 9px 15px;
      }
    }
  }
`;

export const EnrollmentHistory = styled.div`
  width: 35%;
  height: 70%;
  border: 1px solid red;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

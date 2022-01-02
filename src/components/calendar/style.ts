import styled from "@emotion/styled";

export const CalendarWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  margin: 0 auto;
  overflow: auto;
  padding: 6% 2%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

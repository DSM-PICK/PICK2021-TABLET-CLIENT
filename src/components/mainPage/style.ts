import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 83%;
  margin: 0 auto;
  overflow: auto;
  padding: 0 7%;
  box-sizing: border-box;

  canvas {
    position: absolute;
    border: 1px solid;
  }
`;

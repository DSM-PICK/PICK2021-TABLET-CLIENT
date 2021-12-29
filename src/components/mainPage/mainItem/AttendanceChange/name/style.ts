import styled from "@emotion/styled";

interface Props {
  open: boolean;
}

export const StudentList = styled.div<Props>`
  width: fit-content;
  height: fit-content;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(149, 149, 149, 0.25);
  border-radius: 10px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  position: absolute;
  left: 27%;
  z-index: 10;
  top: 63%;

  & span {
    margin-bottom: 6px;
    font-size: 20px;
  }
`;

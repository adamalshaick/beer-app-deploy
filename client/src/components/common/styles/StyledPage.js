import styled, { keyframes } from "styled-components";

const entry = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledPage = styled.div`
  background-color: ${props => (props.dark ? "#2b2e39" : "white")};
  transition: background-color 0.4s;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

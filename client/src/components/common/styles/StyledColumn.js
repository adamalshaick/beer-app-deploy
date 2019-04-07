import styled, { keyframes } from "styled-components";

const entry = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledColumn = styled.div`
  background-color: ${props => (props.dark ? "#1f2427" : "whitesmoke")};
  color: ${props => (props.dark ? "whitesmoke" : "black")};
  transition: background-color 0.4s;
  animation: ${entry} 0.4s;
  margin-top: 200px;
  width: 100%;
  border-radius: 12px;
`;

export const BeersColumn = styled.div`
  animation: ${entry} 0.4s;
  padding: 1rem;
`;

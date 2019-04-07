import styled from "styled-components";

export const MutedDots = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  opacity: 0.5;
  color: ${props => (props.dark ? "white" : "black")};
  animation: load 1.5s infinite;
  @keyframes load {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Wrapper = styled.div`
  background-color: ${props => (props.dark ? "#1f2427" : "whitesmoke")};
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

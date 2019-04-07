import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background-color: black;
  z-index: 1;
`;

export const Image = styled.img`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  max-width: 350px;
  max-height: 350px;
`;

export const Thumbnail = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

import styled from "styled-components";

export const Menu = styled.div`
  padding: 1rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${props => (props.dark ? "#1f2427" : "whitesmoke")};
  color: ${props => (props.dark ? "whitesmoke" : "black")};
  position: absolute;
  top: 120px;
  right: 100px;
  border-radius: 0.75rem;
  visibility: ${props => (props.showOptions ? "visible" : "hidden")};
  opacity: ${props => (props.showOptions ? "1" : "0")};
  transition: all 0.25s;
  z-index: 4;
`;

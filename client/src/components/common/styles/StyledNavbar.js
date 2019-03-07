import styled from "styled-components";

export const StyledNavbar = styled.header`
  width: 100%;
  @media (min-width: 768px) {
    height: 100px;
    background-color: ${props => (props.dark ? "black" : "whitesmoke")};
  }
`;

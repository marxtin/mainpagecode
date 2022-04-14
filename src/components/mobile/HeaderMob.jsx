import React from "react";
import P2 from "../subcomponents/P2"
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
 
  & > h1 {
    font-family: "StintUltraExpanded";
    color: ${({ theme }) => theme.headline};
    font-size: 1.25rem;
    transform: scaleY(1.5);
    letter-spacing: 0.2rem;
    font-weight: bold;
    
  }
  & > p {
      margin-right: 0.5rem;
  }
`;
/* #00dc76 */
const Header = () => {
  return (
    <HeaderContainer>
        <P2>that's right,</P2>
      <h1>MARTIN CODES NOW</h1>
    </HeaderContainer>
  );
};

export default Header;
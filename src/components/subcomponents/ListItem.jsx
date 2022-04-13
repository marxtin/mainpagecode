import React, { useContext } from "react";


import styled from "styled-components";


const Listing = styled.p`
font-family: "StintUltraExpanded";
    color: ${({ theme }) => theme.headline};
    
    transform: scaleY(1.5);
    letter-spacing: 0.2rem;
    font-weight: bold;
`

const ListItem = ({children}) => {
  return (
    <Listing>{children}</Listing>
  )
}

export default ListItem
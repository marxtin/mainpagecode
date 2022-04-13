import React from 'react'
import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme }) => theme.headline_part};
  font-family: "MPLUS1CODE";
  font-size:1.25rem;
  font-weight:bold;
  
`;


const P2 = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default P2
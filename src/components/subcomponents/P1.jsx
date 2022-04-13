import React from 'react'
import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: "MPLUS1CODE";
`;


const P1 = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default P1
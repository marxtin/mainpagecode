import React from 'react'
import styled from "styled-components";

const InfoText = styled.p`
color: #7600dc;
font-family: "MPLUS1CODE";
font-size:1.25rem;
font-weight:bold;
`

const Info = ({children}) => {
  return (
    <InfoText>{children}</InfoText>
  )
}

export default Info
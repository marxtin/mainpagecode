import React from "react";

import styled from "styled-components";


const Div = styled.div`
  width: 100vw;
 height: ${props=>props.height};
  position: absolute;
  left: 0;
  top: ${props => props.top}
`;

const MainDiv = ({ children,top,height }) => {
 

  return <Div height={height} top={top}>{children}</Div>;
};

export default MainDiv;

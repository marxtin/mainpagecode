import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";
import Fog from "../special/Fog";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Overlay = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const Text = styled.div`
  background-color:${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-size: ${props=>props.fontSize};
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: ${({ theme }) => theme.mixblend};
  font-family: "MPLUS1CODE";
  text-align: ${props=>props.textAlign};
`;
const TextElem = ({children,fontSize}) => {
  const { opacity } = useContext(Context);

  return (
    <>
      <Container className={opacity ? "opacity" : "opacity_zero"}>
        <Overlay>
          <Text fontSize={fontSize}>
           {children}
          </Text>
        </Overlay>
        <Fog />
      </Container>
    </>
  );
};

export default TextElem;

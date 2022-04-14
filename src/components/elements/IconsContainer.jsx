import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { GrSolaris } from "react-icons/gr";
import { BsMoonStars } from "react-icons/bs";
import Black from "../icons/Black";
import Blue from "../icons/Blue";
import Orange from "../icons/Orange";
import Green from "../icons/Green";

const Container = styled.div`
  height: 80px;
  display: flex;
  align-content: center;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: -0.3rem;
  margin-left: 2rem;
`;

const DarkLightToggleBox = styled.div`
  height: 60px;
  padding: 10px;
  margin-top: -0.8rem;
  margin-left: 3rem;
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconsContainer = () => {
  const { dark, setDark } = useContext(Context);
  return (
    <Container>
      {dark ? (
        <Green>
          <a
            href="https://www.linkedin.com/in/martin-karl-bittner-963aa022a"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="mailto:martin.karl.bittner@gmail.com">
            <AiOutlineMail />
          </a>
          <a href="https://github.com/marxtin" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>{" "}
        </Green>
      ) : (
        <Black>
          <a
            href="https://www.linkedin.com/in/martin-karl-bittner-963aa022a"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="mailto:martin.karl.bittner@gmail.com">
            <AiOutlineMail />
          </a>
          <a href="https://github.com/marxtin" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </a>{" "}
        </Black>
      )}
      <DarkLightToggleBox onClick={() => setDark(!dark)}>
        {dark ? (
          <Orange>
            <GrSolaris />
          </Orange>
        ) : (
          <Blue>
            <BsMoonStars />
          </Blue>
        )}
      </DarkLightToggleBox>
    </Container>
  );
};

export default IconsContainer;

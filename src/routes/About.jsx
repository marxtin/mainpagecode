import React, { useContext } from "react";
import Context from "../context/Context";
import ListItem from "../components/subcomponents/ListItem";
import P2 from "../components/subcomponents/P2";
import Info from "../components/subcomponents/Info";
import Portrait from "../data/img3.png";
import styled from "styled-components";

const InnerContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 66.6%;
`;

const ImageContainer = styled.div`
  width: 33.3%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  gap: 0.5rem;
  text-align: justify;
  & > p {
    margin: 0;
    text-align: justify;
  }
  & > p > a {
    margin: 0;
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Img = styled.img`
  filter: drop-shadow(0px 1px 1px #7600dc99) drop-shadow(1px -1px 1px #7600dc99)
    drop-shadow(1px 0px 1px #00dc7699) drop-shadow(-1px 1px 1px #00dc7699);
    pointer-events: none;
`;
const About = () => {
  const { opacity } = useContext(Context);

  return (
    <InnerContainer className={opacity ? "opacity" : "opacity_zero"}>
      <TextContainer>
          <Div>
              <P2>Hi! I am</P2><ListItem>Martin</ListItem><P2>and I am originally a geologist, but started coding</P2>
          </Div>
          <Div>
              <P2>in 2021 (...yup, in the shadow of the pandemic). Almost one year later, </P2>
          </Div>
          <Div>
              <P2>I am both passionate about creating stuff with my current knowledge and</P2>
          </Div>
          <Div>
              <P2>learning new techniques and technologies. While coding I listen to Iron</P2>
          </Div>
          <Div>
              <P2>Maiden and besides coding I roam green areas in and around Berlin on my </P2>
          </Div>
          <Div>
              <P2>bike or hunt for secrets in the Lands Between. You might say I am a mix  </P2>
          </Div>
          <Div>
              <P2>between a nerd and a naturalist. Check out my</P2><ListItem>Projects</ListItem><P2>and</P2><ListItem>Skills</ListItem><P2>and</P2>
          </Div>
          <Div>
              <P2>drop a line via</P2><ListItem>E-mail</ListItem><P2>or on one of my</P2><ListItem>Socials</ListItem><P2>. Have a good one :)</P2>
          </Div>
      </TextContainer>
      <ImageContainer>
        <Img src={Portrait} alt="The site creator, Martin" />
      </ImageContainer>
    </InnerContainer>
  );
};

export default About;

import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context/Context";
import Fog from "../components/special/Fog";
import TextElem from "../components/elements/TextElem"


const Skills = () => {
  const { skillsText,learningText } = useContext(Context);

  return (
   
      <TextElem fontSize={"4rem"} textAlign={"left"}>
          {skillsText}<hr/>currently learning:<br/>{learningText}
    </TextElem>
  );
};

export default Skills;
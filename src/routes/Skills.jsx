import React, { useContext } from "react";
import Context from "../context/Context";
import TextElem from "../components/elements/TextElem";

const Skills = () => {
  const { skillsText, learningText, mobile } = useContext(Context);

  return (
    <TextElem fontSize={mobile ? "2rem" : "4rem"} textAlign={"left"}>
      {mobile && (
        <div>
          <div>My Skills</div>
          <br />
        </div>
      )}
      {skillsText}
      <hr />
      currently learning:
      <br />
      {learningText}
    </TextElem>
  );
};

export default Skills;

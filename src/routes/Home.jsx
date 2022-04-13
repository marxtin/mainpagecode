import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context/Context";
import Fog from "../components/special/Fog";
import TextElem from "../components/elements/TextElem"


const Home = () => {
  const { homeText } = useContext(Context);

  return (
   
      <TextElem fontSize={"4rem"} textAlign={"justify"}>
          {homeText}
    </TextElem>
  );
};

export default Home;

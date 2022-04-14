import React, { useContext } from "react";
import Context from "../context/Context";
import TextElem from "../components/elements/TextElem"


const Home = () => {
  const { homeText, mobileText, mobile } = useContext(Context);

  return (
   
      <TextElem fontSize={mobile? "2rem" : "4rem"} textAlign={"justify"}>
          {mobile? mobileText : homeText}
    </TextElem>
  );
};

export default Home;

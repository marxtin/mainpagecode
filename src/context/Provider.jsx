import React, { useState, useEffect, useRef } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(true);
  const [opacity, setOpacity] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [dark, setDark] = useState(true);

  const mountedRef = useRef(false);
  //mount/unmount of main central div by click on NavLink
  //e.target.ariaCurrent === "page" && isMounted === true -> when same NavLink clicked again, close

  const handleMountEffect = (e) => {
    if (e.target.ariaCurrent === "page" && isMounted === true) {
      setIsMounted(false);
    } else {
      setIsMounted(!isMounted);

      setTimeout(() => {
        setIsMounted(true);
      }, 410);
    }
  };



  //set opacity transition class for text elements
  //styles/global.js
  useEffect(() => {
    let timer = setTimeout(() => {
      if (isMounted) {
        setOpacity(true);
      }
    }, 500);
    if (isMounted === false) {
      setOpacity(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isMounted]);

  const homeText = `Hello and welcome to my page. I am a new developer on the block and
  would like to show off what I've created so far. Be sure to visit
  now and then, I will keep deploying projects and content. Check out
  the menu for a list of projects, more info about me and ways to
  contact me. Cheers!`
  
  const skillsText = `HTML, CSS, JavaScript, TypeScript, React, React Native, Node.js, express.js, mongoDB`
  const learningText = `more TypeScript, React/Redux, Next.js, svelte, three.js`
  return (
    <Context.Provider
      value={{
        isMounted,
        setIsMounted,
        handleMountEffect,
        mountedRef,
        isTransitioned,
        setIsTransitioned,
        opacity,
        dark,
        setDark,
        homeText,
        skillsText,
        learningText
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;



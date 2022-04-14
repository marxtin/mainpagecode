import React, { useState, useEffect, useRef, useCallback } from "react";
import Context from "./Context";
import useWindowSize from "../hooks/useWindowSize";
import {isMobile} from 'react-device-detect';

const Provider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(true);
  const [opacity, setOpacity] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [dark, setDark] = useState(true);
  const width  = window.innerWidth;
  const [mobile, setMobile] = useState(false);

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
  
  // window responsiveness for onload and onresize

  useEffect(() => {
    window.onresize = () => {
      if (width < 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
      
    };
  }, [width]);

  
  useEffect(() => {
    if(isMobile){
      setMobile(true)
    }else{
      setMobile(false);
    }
  },[])

  useEffect(() => {
    window.onload = () => {
      if (width < 800) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
  }, [width]);
   console.log(width);
  //mobile version reload for fake back to top 
  const handleReload = () =>{ window.location.reload()}

  // text content
  const homeText = `Hello and welcome to my page. I am a new developer on the block and
  would like to show off what I've created so far. Be sure to visit
  now and then, I will keep deploying projects and content. Check out
  the menu for a list of projects, more info about me and ways to
  contact me. Cheers!`;
  const mobileText = `Hello and welcome to my page. I am a new developer on the block and
  would like to show off what I've created so far. Be sure to visit
  now and then, I will keep deploying projects and content. Scroll down for more info about me and my projects. If you like, drop me a line or check out my socials :) Cheers!`;

  const skillsText = `HTML, CSS, JavaScript, TypeScript, React, React Native, Node.js, express.js, mongoDB`;
  const learningText = `more TypeScript, React/Redux, Next.js, svelte, three.js`;
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
        learningText,
        mobile,
        mobileText,
      
        handleReload
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

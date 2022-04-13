import React, { useState, useEffect } from "react";


const Fog = () => {
  const [rad, setRad] = useState(0);
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  useEffect(() => {
    setRad(y / 100);
  }, [x, y]);

  return (
    <>
     

     <div
        style={{
          background:
            "linear-gradient(45deg,#4166f5,#00000000 77.7%),linear-gradient(135deg, #57ff97, #00000000 77.7%),linear-gradient(225deg, #ed6969, #00000000 77.7%),linear-gradient(305deg, #ffe457, #00000000 77.7%)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          filter: `hue-rotate(${rad}rad)`,
          zIndex:"-2"
        }}
      ></div>  
    </>
  );
};

export default Fog

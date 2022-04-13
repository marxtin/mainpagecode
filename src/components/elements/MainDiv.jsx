import React, { useContext } from "react";
import Context from "../../context/Context";
import useMountTransition from "../../hooks/useMountTransition";
import "./MainDiv.css";
const MainDiv = ({children}) => {
    const {isMounted, mountedRef} = useContext(Context);
   
    const hasTransitionedIn = useMountTransition(isMounted, 500);
    
  return (
    <div className="container">
     
      {(hasTransitionedIn || isMounted) && (
        <div 
          className={`card ${hasTransitionedIn && "in"} ${
            isMounted && "visible"
          }`}
        >
         {children}
        </div>
      )}
    </div>
  );
};

export default MainDiv;

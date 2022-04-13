import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";
import IconsContainer from "../elements/IconsContainer"
import { Outlet, NavLink } from "react-router-dom";

const Ul = styled.ul`
  width: 300px;
  display: flex;
  height: 75px;
  flex-direction: row;
  list-style-type: none;
  position: fixed;
  top: 40px;
  left: 20px;
  & > li > a {
    margin-left: 0.25rem;
    padding: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
  }
  font-family: "MPLUS1CODE";
`;



const linkStyle = ({ isActive }) => {
  return isActive
    ? {
        border: "2px solid #7600dc",
      }
    : { color: "#7600dc", border: "2px solid #f0f0f000" };
};

const Layout = () => {
  const { handleMountEffect } = useContext(Context);
  return (
    <>
      <nav>
        <Ul>
          <li>
            <NavLink
              style={linkStyle}
              to="/"
              onClick={(e) => {
                handleMountEffect(e);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/dashboard"
              onClick={(e) => handleMountEffect(e)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/about"
              onClick={(e) => handleMountEffect(e)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={linkStyle}
              to="/skills"
              onClick={(e) => handleMountEffect(e)}
            >
              Skills
            </NavLink>
          </li>

          <IconsContainer/>
        
       
          {/*     <li>
            <NavLink to="/nothing-here">Nothing Here</NavLink>
          </li> */}
        </Ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

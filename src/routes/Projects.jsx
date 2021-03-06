import React, { useContext } from "react";
import Context from "../context/Context";
import ListItem from "../components/subcomponents/ListItem";
import P2 from "../components/subcomponents/P2";
import Info from "../components/subcomponents/Info";
import styled from "styled-components";

const InnerContainer = styled.div`
  width: 90%;
  height: 90%;
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
`;
const Div = styled.div`
  display: flex;
  flex-direction: ${(props) => props.itemsFlexDirection};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.height};
  gap: 0.5rem;
  margin-bottom: ${(props) => props.marginBottom};

  & > p {
    margin: 0;
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

const Line = styled.div`
  width: 100vw;
  height: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;
const Projects = ({
  display,
  flexDirection,
  itemsFlexDirection,
  height,
  marginBottom,
  alignItems,
}) => {
  const { opacity, mobile } = useContext(Context);

  return (
    <InnerContainer
      display={display}
      flexDirection={flexDirection}
      className={opacity ? "opacity" : "opacity_zero"}
    >
      {mobile && (
        <>
          <ListItem>My Projects</ListItem>
          <Line />
          <br />
        </>
      )}
      <Div
        itemsFlexDirection={itemsFlexDirection}
        height={height}
        marginBottom={marginBottom}
        alignItems={alignItems}
      >
        <ListItem>
          <a
            href="https://marxtin.github.io/earth-o-quizz"
            rel="noreferrer"
            target="_blank"
          >
            Earth-O-Quizz
          </a>
        </ListItem>
        <P2>test your knowledge about planet earth</P2>
        <Info>created with React</Info>
        <P2>
          <a
            href="https://github.com/marxtin/quizzappcode"
            rel="noreferrer"
            target="_blank"
          >
            see code
          </a>
        </P2>
        {mobile && <Line />}
      </Div>

      <Div
        itemsFlexDirection={itemsFlexDirection}
        height={height}
        marginBottom={marginBottom}
        alignItems={alignItems}
      >
        <ListItem>
          <a
            href="https://marxtin.github.io/weatherApp"
            rel="noreferrer"
            target="_blank"
          >
            Weather App
          </a>
        </ListItem>
        <P2>minimalistic design, with current + forecast</P2>
        <Info>created with TypeScript and React</Info>
        <P2>
          <a
            href="https://github.com/marxtin/weatherappcode"
            rel="noreferrer"
            target="_blank"
          >
            see code
          </a>
        </P2>{" "}
        {mobile && <Line />}
      </Div>
      <Div
        itemsFlexDirection={itemsFlexDirection}
        height={height}
        marginBottom={marginBottom}
        alignItems={alignItems}
      >
        <ListItem>
          {" "}
          <a
            href="https://marxtin.github.io/myPhotoBlog"
            rel="noreferrer"
            target="_blank"
          >
            Berlin Photo Blog
          </a>
        </ListItem>
        <P2>photos by me and Robin</P2>
        <Info>created with React</Info>
        <P2>
          <a
            href="https://github.com/marxtin/photoblogcode"
            rel="noreferrer"
            target="_blank"
          >
            see code
          </a>
        </P2>{" "}
        {mobile && <Line />}
      </Div>
      <Div
        itemsFlexDirection={itemsFlexDirection}
        height={height}
        marginBottom={marginBottom}
        alignItems={alignItems}
      >
        <ListItem>
          <a
            href="https://marxtin.github.io/notesApp"
            rel="noreferrer"
            target="_blank"
          >
            Notes App
          </a>
        </ListItem>
        <P2>with localStorage functionality</P2>
        <Info>created with React</Info>
        <P2>
          <a
            href="https://github.com/marxtin/noteappcode"
            rel="noreferrer"
            target="_blank"
          >
            see code
          </a>
        </P2>{" "}
        {mobile && <Line />}
      </Div>
      <Div
        itemsFlexDirection={itemsFlexDirection}
        height={height}
        marginBottom={marginBottom}
        alignItems={alignItems}
      >
        <ListItem>
          <a
            href="https://marxtin.github.io/taskListApp"
            rel="noreferrer"
            target="_blank"
          >
            Task List App
          </a>
        </ListItem>
        <P2>with localStorage functionality</P2>
        <Info>created with vanilla JavaScript</Info>
        <P2>
          <a
            href="https://github.com/marxtin/taskListApp"
            rel="noreferrer"
            target="_blank"
          >
            see code
          </a>
        </P2>{" "}
        {mobile && <Line />}
      </Div>
      <Div
        itemsFlexDirection={itemsFlexDirection}
        height={height}
        marginBottom={marginBottom}
        alignItems={alignItems}
      >
        <ListItem>
          <a
            href="https://marxtin.github.io/mre"
            rel="noreferrer"
            target="_blank"
          >
            Matrix Rain Effect
          </a>
        </ListItem>
        <P2>with HTML canvas</P2>
        <Info>created with vanilla JavaScript</Info>
        <P2>
          <a
            href="https://github.com/marxtin/mre"
            rel="noreferrer"
            target="_blank"
          >
            see code
          </a>
        </P2>{" "}
        {mobile && <Line />}
      </Div>
    </InnerContainer>
  );
};

export default Projects;

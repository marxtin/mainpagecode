import React, { useContext } from "react";
import { Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import Context from "./context/Context";
import useMountTransition from "./hooks/useMountTransition";
import Layout from "./components/layout/Layout";
import MainDiv from "./components/elements/MainDiv";
import Home from "./routes/Home";
import Header from "./components/elements/Header";
import Footer from "./components/elements/Footer";
import Projects from "./routes/Projects";
import Skills from "./routes/Skills";
import About from "./routes/About";



const App = () => {
  const { isMounted, dark } = useContext(Context);
  const hasTransitionedIn = useMountTransition(isMounted, 50);
  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<MainDiv><Home /></MainDiv>} />
            <Route
              path="about"
              element={
                <MainDiv>{hasTransitionedIn && isMounted && <About />}</MainDiv>
              }
            />
            <Route
              path="dashboard"
              element={
                <MainDiv>
                  {hasTransitionedIn && isMounted && <Projects />}
                </MainDiv>
              }
            />
            
            <Route
              path="skills"
              element={
                <MainDiv>
                  {hasTransitionedIn && isMounted && <Skills />}
                </MainDiv>
              }
            />

            <Route path="*" element={<></>} />
          </Route>
        </Routes>
        <Header />
        <Footer />
       {/*  <Fog /> */}
        
      </ThemeProvider>
    </>
  );
};

export default App;

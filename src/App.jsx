import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
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
import MobDiv from "./components/mobile/MobDiv";
import HeaderMob from "./components/mobile/HeaderMob";
import IconsContainer from "./components/elements/IconsContainer";
import P1 from "./components/subcomponents/P1"

const App = () => {
  const { isMounted, dark, mobile } = useContext(Context);
  const hasTransitionedIn = useMountTransition(isMounted, 50);
  return (
    <>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        {mobile ? (
          <>
            <HeaderMob  />
            <hr  />
            <br />
            <IconsContainer />
            <MobDiv height={"90vh"}>
              <Home />
            </MobDiv>
            <MobDiv top={"990px"}>
              <Projects
                display={"flex"}
                flexDirection={"column"}
                itemsFlexDirection={"column"}
                height={"200px"}
                marginBottom={"25px"}
                alignItems={"left"}
              />
            </MobDiv>
            <MobDiv top={"2400px"} height={"79vh"}>
              <Skills />
            </MobDiv>
            <MobDiv top={"3200px"} height={"90vh"}>
              <About />
            </MobDiv>
            <MobDiv top={"4150px"}>
            <P1>Created by Martin Bittner, 2022</P1>
            <P1>Martin Bittner, Germaniapromenade 33, 12347 Berlin</P1>
            <P1 >
            
              <strong>Limitation of liability for internal content</strong>
              <p>The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages.</p>
              <p>Pursuant to section 7, para. 1 of the TMG (Telemediengesetz –  Tele Media Act by German law), we as service providers are liable for our own content on these pages in accordance with general laws. However, pursuant to sections 8 to 10 of the TMG, we as service providers are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of the law, we will immediately remove the content in question. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to us.</p>
              <p><strong>Limitation of liability for external links</strong></p>
              <p>Our website contains links to the websites of third parties („external links“). As the content of these websites is not under our control, we cannot assume any liability for such external content. In all cases, the provider of information of the linked websites is liable for the content and accuracy of the information provided. At the point in time when the links were placed, no infringements of the law were recognisable to us. As soon as an infringement of the law becomes known to us, we will immediately remove the link in question.</p>
              <p><strong>Copyright</strong></p>
              <p>The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, distribution or any form of utilisation beyond the scope of copyright law shall require the prior written consent of the author or authors in question.</p>
              <p><strong>Data protection</strong></p>
              <p>A visit to our website can result in the storage on our server of information about the access (date, time, page accessed). This does not represent any analysis of personal data (e.g., name, address or e-mail address). If personal data are collected, this only occurs – to the extent possible – with the prior consent of the user of the website. Any forwarding of the data to third parties without the express consent of the user shall not take place.</p>
              <p>We would like to expressly point out that the transmission of data via the Internet (e.g., by e-mail) can offer security vulnerabilities. It is therefore impossible to safeguard the data completely against access by third parties. We cannot assume any liability for damages arising as a result of such security vulnerabilities.</p>
              <p>The use by third parties of all published contact details for the purpose of advertising is expressly excluded. We reserve the right to take legal steps in the case of the unsolicited sending of advertising information; e.g., by means of spam mail.</p>
              <p>Source: <a href="http://www.mustervorlage.net/disclaimer-muster#Englisch">Disclaimer on Mustervorlage.net</a></p>
            
</P1>
            </MobDiv>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <MainDiv>
                      <Home />
                    </MainDiv>
                  }
                />
                <Route
                  path="about"
                  element={
                    <MainDiv>
                      {hasTransitionedIn && isMounted && <About />}
                    </MainDiv>
                  }
                />
                <Route
                  path="dashboard"
                  element={
                    <MainDiv>
                      {hasTransitionedIn && isMounted && (
                        <Projects itemsFlexDirection={"row"} height={"50px"} alignItems={"center"}/>
                      )}
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
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;

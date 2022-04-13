import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";
import GreenIcon from "../icons/Green";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";
import useMountTransition from "../../hooks/useMountTransition";
import P1 from "../subcomponents/P1";
import P2 from "../subcomponents/P2";
import "./Footer.css";

const Button = styled.button`
background: transparent;
border: none;
display: block;
margin: 0 auto;
`
const Div = styled.div`
background: ${({ theme }) => theme.body}`

const Footer = () => {
  const { isTransitioned, setIsTransitioned } = useContext(Context);
  const hasTransitionedIn = useMountTransition(isTransitioned, 500);

  return (
    <>
      <footer className={"container_transition"}>
        {
          <div
            className={`card_footer ${hasTransitionedIn && "in"} ${
              isTransitioned && "visible"
            }`}
          >
            <div style={{ borderBottom: "2px solid #7600dc" }}>
              
              <Button onClick={() => setIsTransitioned(!isTransitioned)}>
                { isTransitioned ? <>
                  <GreenIcon><P2>Disclaimer:</P2>
                    <BsChevronDoubleDown />
                  </GreenIcon>
                </> : <>
                  <GreenIcon><P2>Disclaimer:</P2>
                    <BsChevronDoubleUp />
                  </GreenIcon>
                </>}
              </Button>
            </div><Div >
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
            
</P1></Div>
            
          </div>
        }
      </footer>
    </>
  );
};

export default Footer;

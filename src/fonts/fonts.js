import { createGlobalStyle } from 'styled-components';


import DotGothic16Woff from './DotGothic16-Regular.woff';
import DotGothic16Woff2 from './DotGothic16-Regular.woff2';
import NotoSansWoff from './NotoSans-Regular.woff';
import NotoSansWoff2 from './NotoSans-Regular.woff2';
import StintUltraExpandedWoff from './StintUltraExpanded-Regular.woff';
import StintUltraExpandedWoff2 from './StintUltraExpanded-Regular.woff2';
import MPLUS1CODEWoff from './MPLUS1Code-VariableFont_wght.woff';
import MPLUS1CODEWoff2 from './MPLUS1Code-VariableFont_wght.woff2';
import BungeeWoff from './Bungee-Regular.woff';
import BungeeWoff2 from './Bungee-Regular.woff2';
import RubikBeastlyWoff from './RubikBeastly-Regular.woff';
import RubikBeastlyWoff2 from './RubikBeastly-Regular.woff2';
import StalinistOneWoff from './StalinistOne-Regular.woff';
import StalinistOneWoff2 from './StalinistOne-Regular.woff2';
import ArchivoBlackWoff from './ArchivoBlack-Regular.woff';
import ArchivoBlackWoff2 from './ArchivoBlack-Regular.woff2';

export default createGlobalStyle`
   
    @font-face {
        font-family: 'ArchivoBlack';
        src: local('ArchivoBlack'), local('ArchivoBlack'),
        url(${ArchivoBlackWoff2}) format('woff2'),
        url(${ArchivoBlackWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'StalinistOne';
        src: local('StalinistOne'), local('StalinistOne'),
        url(${StalinistOneWoff2}) format('woff2'),
        url(${StalinistOneWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'RubikBeastly';
        src: local('RubikBeastly'), local('RubikBeastly'),
        url(${RubikBeastlyWoff2}) format('woff2'),
        url(${RubikBeastlyWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'MPLUS1CODE';
        src: local('MPLUS1CODE'), local('MPLUS1CODE'),
        url(${MPLUS1CODEWoff2}) format('woff2'),
        url(${MPLUS1CODEWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Bungee';
        src: local('Bungee'), local('Bungee'),
        url(${BungeeWoff2}) format('woff2'),
        url(${BungeeWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'StintUltraExpanded';
        src: local('StintUltraExpanded'), local('StintUltraExpanded'),
        url(${StintUltraExpandedWoff2}) format('woff2'),
        url(${StintUltraExpandedWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'DotGothic16';
        src: local('DotGothic16'), local('DotGothic16'),
        url(${DotGothic16Woff2}) format('woff2'),
        url(${DotGothic16Woff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'NotoSans';
        src: local('NotoSans'), local('NotoSans'),
        url(${NotoSansWoff2}) format('woff2'),
        url(${NotoSansWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    `
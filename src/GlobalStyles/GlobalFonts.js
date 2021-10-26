import { createGlobalStyle } from 'styled-components'
import NflTampaBayBuccaneersTTF from './fonts/NflTampaBayBuccaneers-6MEv.ttf'
import DosisTTF from './fonts/Dosis-Medium.ttf'
import OswaldTTF from './fonts/Oswald-Medium.ttf'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Nfl Tampa Bay Buccaneers';
  src: url(${NflTampaBayBuccaneersTTF}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;    
}
@font-face {
  font-family: 'Dosis Medium';
  src: url(${DosisTTF}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: auto;    
}
@font-face {
  font-family: 'Oswald Medium';
  src: url(${OswaldTTF}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: auto;    
}
`
export default FontStyles

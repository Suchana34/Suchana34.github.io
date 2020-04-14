/** @jsx jsx */
import { jsx} from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Morph from "../styles/morph"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {

  return(
  <div>
    <div style={{marginLeft:4+'rem', marginBottom:0, marginTop:4+'rem'}}>
    <Morph width={1} stroke color="icon_orange" left="40%" top="0%" />
    </div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="cloud2" hiddenMobile width={48} stroke color="icon_orange" left="60%" top="0%" />
        <SVG icon="star" width={6} color="icon_darker" left="40%" top="0%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="cloud1" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="cloud2" width={16} stroke color="icon_darkest" left="60%" top="65%" />
        <SVG icon="cloud1" hiddenMobile width={8} color="icon_darkest" left="30%" top="0%" />
      </UpDownWide>
      <SVG icon="cloud1" width={6} color="icon_darkest" left="4%" top="10%" />
      <SVG icon="cloud2" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="star" hiddenMobile width={24} color="icon_purple" left="55%" top="90%" />
      <SVG icon="star" width={6} color="icon_darkest" left="50%" top="10%" />
      <SVG icon="star" width={12} color="icon_darkest" left="90%" top="30%" />
      <SVG icon="planet" width={16} stroke color="icon_darker" left="10%" top="70%" />
      
      <SVG icon="rocket" width={48} stroke color="icon_red" left="70%" top="0%" />
      <SVG icon="planet" width={30} stroke color="icon_darker" left="80%" top="70%" />
      <SVG icon="star" width={20} stroke color="icon_darker" left="80%" top="60%" />

    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
  )
}

export default Hero

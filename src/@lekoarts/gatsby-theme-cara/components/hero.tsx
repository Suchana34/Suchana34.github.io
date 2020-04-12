/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { cloud1, cloud1Wide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <cloud1>
        <SVG icon="cloud2" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
        <SVG icon="planet" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="star" width={6} color="icon_darker" left="60%" top="15%" />
      </cloud1>
      <cloud1Wide>
        <SVG icon="cloud2" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="cloud2" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="cloud1" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="cloud2" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <SVG icon="cloud1" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="cloud1" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </cloud1Wide>
      <SVG icon="cloud1" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="cloud1" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="cloud1" width={12} color="icon_darkest" left="50%" top="60%" />
      <SVG icon="cloud1" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="cloud1" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="cloud2" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <SVG icon="cloud1" width={64} color="icon_green" left="95%" top="5%" />
      <SVG icon="star" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="star" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="star" width={12} color="icon_darkest" left="40%" top="30%" />
      <SVG icon="planet" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <SVG icon="planet" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
)

export default Hero

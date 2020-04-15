/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AchievementsMDX from "../sections/achievements"

const Achievements = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="star" hiddenMobile width={16}  left="50%" top="75%" />
        <SVG icon="star" hiddenMobile width={18} left="70%" top="20%" />
        <SVG icon="cloud2" width={8} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="cloud2" width={12} stroke color="icon_brightest" left="95%" top="0%" />
        <SVG icon="cloud1" hiddenMobile width={6} color="icon_brightest" left="15%" top="0%" />
        <SVG icon="star" hiddenMobile width={18} color="icon_darkest" left="15%" top="30%" />
        <SVG icon="star" hiddenMobile width={14} color="icon_darkest" left="45%" top="99%" />
        <SVG icon="planet" hiddenMobile width={8} color="icon_darkest" left="15%" top="95%" />
        <SVG icon="cloud2" hiddenMobile width={18} color="icon_darkest" left="95%" top="89%" />

      </UpDownWide>
      <SVG icon="cloud1" width={12} color="icon_darkest" left="70%" top="60%" />
      <SVG icon="star" width={16} color="icon_orange" left="10%" top="17%" />
      <SVG icon="planet" width={8} stroke color="icon_darkest" left="80%" top="70%" />
      
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor} sx= {{variant : `texts.bigger`}}>
      <Inner>
      
        <AchievementsMDX />
      </Inner>
    </Content>
  </div>
)

export default Achievements

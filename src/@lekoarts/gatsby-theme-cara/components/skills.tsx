/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import {mdiPdfBox} from '@mdi/js'
import {Icon} from '@mdi/react'

// @ts-ignore
import SkillMDX from "../sections/skills"
const Skills = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="star" hiddenMobile width={6}  left="20%" top="75%" />
        <SVG icon="star" hiddenMobile width={8} left="70%" top="20%" />
        <SVG icon="cloud2" width={8} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="cloud2" width={12} stroke color="icon_brightest" left="15%" top="100%" />
        <SVG icon="cloud1" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <SVG icon="star" hiddenMobile width={8} color="icon_darkest" left="25%" top="10%" />
      </UpDownWide>
      <SVG icon="cloud1" width={12} color="icon_darkest" left="30%" top="100%" />
      <SVG icon="star" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="planet" width={8} stroke color="icon_darkest" left="20%" top="100%" />
      
      <SVG icon="rocket" width={48} stroke color="icon_red" left="70%" top="90%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor} sx= {{variant : `texts.bigger`}}>
      <Inner>
        
        <SkillMDX />
        <h1>Have a read to my CV</h1> {`    `}
        <a href = "https://drive.google.com/open?id=17tMvveGjzpDd1g53yY9zMnv8S2BCZiNB"><Icon path = {mdiPdfBox} size={2} color = '#667eea'></Icon>
        </a>
      </Inner>
    </Content>
  </div>
)

export default Skills

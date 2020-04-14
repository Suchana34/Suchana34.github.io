/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide} from "../styles/animations"
// @ts-ignore
import ContactMDX from "../sections/contact"
import ContactForm from './contact-form';

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    
    <Content speed={0.4} offset={offset} factor={factor}>
      <ContactMDX />
      <ContactForm />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="cloud2" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="cloud2" width={12} stroke color="icon_brightest" left="95%" top="20%" />
        <SVG icon="cloud1" width={6} color="icon_brightest" left="85%" top="15%" />
      </UpDownWide>
      <SVG icon="cloud1" width={12} color="icon_darkest" left="30%" top="20%" />
      <SVG icon="planet" width={8} stroke color="icon_darkest" left="40%" top="20%" />
      
      <SVG icon="rocket" width={48} stroke color="icon_red" left="10%" top="45%" />
    </Divider>
  </div>
)

export default Contact

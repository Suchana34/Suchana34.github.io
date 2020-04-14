/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, Up} from "../styles/animations"
// @ts-ignore
import ContactMDX from "../sections/contact"
import Footer from "./footer"
import ContactForm from './contact-form';

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider fill = "footer" speed={0.2} offset={offset} factor={factor}>
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)` }}>
         <Up>
         <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
              />
            </path>
          </svg>
          </Up>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <ContactMDX />
      <ContactForm />
      <Footer />
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

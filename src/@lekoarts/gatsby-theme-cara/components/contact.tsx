/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown} from "../styles/animations"
// @ts-ignore
import ContactMDX from "../sections/contact"
import ContactForm from './contact-form';

import Navbar from './navbar';
import { mdiHome } from '@mdi/js';


const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    

    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
      <ContactMDX />
      </Inner>
      <ContactForm />
      
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="cloud1"  width={8} color="icon_darkest" left="70%" top="20%" />
        <SVG icon="cloud1"  width={25} color="icon_darkest" left="70%" top="99%" />
        <SVG icon="cloud2"  width={28} color="icon_darkest" left="95%" top="45%" />

        <SVG icon="cloud2" width={12} stroke color="icon_brightest" left="15%" top="89%" />
        
        <SVG icon="cloud1"  width={57} color="icon_darkest" left="20%" top="80%" />
        <SVG icon="cloud1" width={56} color="icon_brightest" left="15%" top="9%" />
      </UpDown>
      <SVG icon="cloud1" width={12} color="icon_darkest" left="30%" top="50%" />
      <SVG icon="planet" width={8} stroke color="icon_darkest" left="80%" top="80%" />
      
      <SVG icon="rocket" width={48} hiddenMobile stroke color="icon_red" left="10%" top="45%" />
    </Divider>

    
    <div style={{top:`2%`, left:`10%`, position: `absolute`}}>
        <Navbar link = "/" icon={mdiHome} description="Back to Home"/>
    </div>

  </div>
)

export default Contact

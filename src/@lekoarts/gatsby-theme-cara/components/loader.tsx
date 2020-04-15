import React  from 'react';
import SVG from "./svg"
import {Rotate } from "../styles/animations"
import Inner from './../elements/inner';

const Loader = () =>(


    <React.Fragment>
        <Inner>
        <div style={{
          padding: 2 + `rem`,
          margin: `1rem 1rem 0rem 1rem`,
          borderRadius: 2 + `rem`
        }}>
        <h1>Loading...</h1>
        </div>
      </Inner>
        <SVG icon="star" width={19} left="0%" top="5%" />
        <SVG icon="star" width={19} left="10%" top="95%" />
        <SVG icon="cloud2" width={20} left="20%" top="75%" />

        <SVG icon="star" width={12} left="95%" top="50%" />
        <SVG icon="star" width={24} color="icon_brightest" left="85%" top="45%" />
        
        <SVG icon="cloud2" width={18} left="5%" top="5%" />
        <SVG icon="cloud1" width={20} left="15%" top="15%" />
      <Rotate>
        
      <SVG icon="planet" width={19}  left="40%" top="50%" />
      <SVG icon="planet" width={19} left="60%" top="50%" />
        
      </Rotate>
    </React.Fragment>
      
)
export default Loader
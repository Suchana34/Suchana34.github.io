import React , { useState, useEffect } from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "./../@lekoarts/gatsby-theme-cara/components/layout";
import Contact from "./../@lekoarts/gatsby-theme-cara/components/contact";
import Loader from './../@lekoarts/gatsby-theme-cara/components/loader';


const Form = () => {
  
  
  let [state,setState] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };


  const wait = async (milliseconds = 20) => {
      await sleep(milliseconds);
      setState(false);
    };

  useEffect(()=>{
    wait(3000);
  });
  
  if(state === true) return <Loader/>

  if(state === false){
  return(
    <Layout>
    <Parallax pages={2} scrolling={true}>
      <Contact offset={0.3} factor={1} />
    </Parallax>
  </Layout>
  )
  }

}

export default Form

import React , { useState, useEffect } from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Skills from "../components/skills"
import Achievements from '../components/achievements';
import Footer from '../components/footer';
import Loader from '../components/loader'


const Main = () => {
  
  
  let [state,setState] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };


  const wait = async (milliseconds = 20) => {
      await sleep(milliseconds);
      setState(false)
    }

  useEffect(()=>{
    wait(3000)
  })
  
  if(state === true) return <Loader />

  if(state === false){
  return(
    <Layout>
    <Parallax pages={12} scrolling={true}>
      <Hero offset={0} factor={1}/>
      <About offset={1} factor={2} />
      <Skills offset={3} factor={2} />
      <Projects offset={5} factor={4} />
      <Achievements offset={9} factor={2} />
      <Footer offset={10.6} factor={1} />
    </Parallax>
  </Layout>
  )
  }

}

export default Main

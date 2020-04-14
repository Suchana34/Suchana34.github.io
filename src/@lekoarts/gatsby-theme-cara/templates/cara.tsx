import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
import Achievements from './../components/achievements';

const Cara = () => (
  <Layout>
    <Parallax pages={11} scrolling={true}>
      <Hero offset={0} factor={1}/>
      <About offset={0.8} factor={1} />
      <Skills offset={1.8} factor={1} />
      <Projects offset={3.8} factor={3} />
      <Achievements offset={7.4} factor={2} />
      <Contact offset={8.8} factor={2} />
    </Parallax>
  </Layout>
)

export default Cara

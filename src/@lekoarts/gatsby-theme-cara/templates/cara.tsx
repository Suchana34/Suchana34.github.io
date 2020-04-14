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
      <About offset={1} factor={1} />
      <Skills offset={2} factor={1} />
      <Projects offset={4} factor={3} />
      <Achievements offset={7.6} factor={2} />
      <Contact offset={9} factor={2} />
    </Parallax>
  </Layout>
)

export default Cara

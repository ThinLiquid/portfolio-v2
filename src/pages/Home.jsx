import React from 'react'
import MenuCard from '../components/MenuCard'

import FeatherIcon from 'feather-icons-react';

export default function Home() {
  function Animated(props) {
    let i = 0;
    return props.text.split('').map((letter) => {
        i = i + 1;
        return (<span key={i} className="letter" style={{ animation: "1s bounce cubic-bezier(0.5, 0.07, 0.68, 0.82) infinite", animationDelay: "." + i + "s"}}>{letter}</span>)
      })
  }
  
  return (
    <div className="container" style={{ marginTop:'85px' }}>
      <MenuCard heading={<>Hey, I'm <span className="highlight"><Animated text="LiquidDev"/></span>!</>} subHeading="about me" classed="about" href="about"/>
      <MenuCard heading="TDS Strategist" subHeading="latest project" classed="latest" href="https://strategist.glitch.me/"/>
      <MenuCard heading={<>View my<span className="highlight"><Animated text="projects"/></span></>} subHeading="projects" classed="projects" href="projects"/>
      <MenuCard heading={<><span className="highlight"><Animated text="GitHub"/></span> Profile</>} subHeading="account" classed="github" href="https://github.com/ThinLiquid"/>
      <MenuCard text={
        <div className="icons">
          <i className="devicon-typescript-plain"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-html5-plain"></i>
          <i className="devicon-css3-plain"></i>
          <i className="devicon-lua-plain"></i>
          <i className="devicon-vscode-plain"></i>
          <i className="devicon-bash-plain"></i>
          <i className="devicon-git-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-npm-original-wordmark"></i>
          <i className="devicon-nodejs-plain"></i>
        </div>
      } heading={<><span className="highlight"><Animated text="Technologies"/></span> I use</>} subHeading="technologies" classed="technologies" href="#"/>
    </div>
  );
}
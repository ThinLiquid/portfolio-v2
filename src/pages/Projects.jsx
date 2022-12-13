import React from 'react'
import ProjectCard from '../components/ProjectCard'
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
    <>
      <div class="container woosh" style={{ marginTop:'85px' }}>
        {/* finish */}
        <MenuCard heading={<>Check out my <span className="highlight"><Animated text="projects"/></span></>} subHeading="projects" className="long"/>
      </div>
      <div className="card-container">
        <ProjectCard href="https://google.com" heading="portfolio"/>
        <ProjectCard href="https://google.com" heading="portfolio"/>
        <ProjectCard href="https://google.com" heading="portfolio"/>
      </div>
    </>
  );
}
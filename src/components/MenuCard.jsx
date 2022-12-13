import React from 'react'
import { Link, Route, useLocation } from 'wouter';

export default function MenuCard({ text, heading, subHeading, classed, href }) {
  const [location, setLocation] = useLocation();
  
  return (
    <a onClick={() => { if (href.includes('https://')) { window.location.href = href } else {setLocation(href)} }} className={"item " + classed}>
      <div className="content">
        <h3>{subHeading}</h3>
        <h1>
          {heading}
        </h1>
        <p>{text}</p>
      </div>
    </a>
  );
}

//Hey, I'm <span className="highlight"><Animated text="LiquidDev"/></span>!
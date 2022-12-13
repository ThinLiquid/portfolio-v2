import React from 'react'
import { Link, Route, useLocation } from 'wouter';

export default function MenuCard({ heading, href }) {
  const [location, setLocation] = useLocation();
  
  return (
    <a href={href} className="card">
      <div className="content">
        <h3>project</h3>
        <h2>{heading}</h2>
      </div>
    </a>
  );
}

//Hey, I'm <span className="highlight"><Animated text="LiquidDev"/></span>!
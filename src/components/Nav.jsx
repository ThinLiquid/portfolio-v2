import React from 'react'
import { Link, Route, useLocation } from 'wouter';

export default function Nav() {
  return (
    <nav>
      <Link href="/"><span className="brand-name">LiquidDev</span></Link>
    </nav>
  );
}
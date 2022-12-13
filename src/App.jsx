import { useLocation, Link, Switch, Route } from 'wouter';
import { useTransition, a } from '@react-spring/web'
import FeatherIcon from 'feather-icons-react';
import './App.scss';

import Nav from './components/Nav'

import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  const [location] = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, display: 'block', transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, display: 'block', transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, display: 'none', transform: 'translate3d(0,-25%,0)' }
  });
  return (
    <main>
      <Nav/>
      {transitions((style, item) => (
        <a.div style={style}>
          <Switch location={item.location}>
            <Route path="/"><Home/></Route>
            <Route path="/projects"><Projects/></Route>
          </Switch>
          <br/>
          <p style={{ textAlign:'center'}}>{new Date().getFullYear()} &copy; <span className="highlight">LiquidDev</span>.<br/>Renders provided by <span className="highlight">Panedwards</span>.</p>
        </a.div>
      ))}
    </main>
  )
}

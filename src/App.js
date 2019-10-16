import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Sampleimage from './components/Sampleimage';
import './components/styles/nav.css';
import './App.css';

function App() {
  let location = useLocation();
  return (
    <div className="App">
        <nav className="nav">
          <div className="nav-icon">
            <p className="nav-icon-title">Blue Ocean</p>
          </div>
          <ul className="nav-main">
              <li className="nav-link"><Link to="/">Home</Link></li>
              <li className="nav-link"><Link to="/about">Services</Link></li>
              <li className="nav-link"><Link to="/sample">Sample Pictures</Link></li>
              <li className="nav-link"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={1000}
            >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/sample" component={Sampleimage} />
            </Switch>
            </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default App;

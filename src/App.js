import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Sampleimage from './components/Sampleimage';
import './components/styles/nav.css';
import './App.css';

const smallBackground = {
  backgroundColor: 'rgba(0,0,0,0.9)'
}

const smallStyle = {
  height: '100vh',
}

function App() {
  const [ small, setSmall ] = useState(false);

  const toggleNav = e => {
    setSmall(!small);
}
const closeNav = e => {
    setSmall(false);
}
  let location = useLocation();
  return (
    <div className="App">
        <nav className="nav">
          <div className="nav-icon">
            <p className="nav-icon-title">Blue Ocean</p>
          </div>
          {/* {
            !small ?  */}
              <ul className="nav-main">
                <li className="nav-link"><Link to="/blueocean">Home</Link></li>
                <li className="nav-link"><Link to="/blueocean/about">Services</Link></li>
                <li className="nav-link"><Link to="/blueocean/sample">Sample Pictures</Link></li>
                <li className="nav-link"><Link to="/blueocean/contact">Contact</Link></li>
              </ul> 
              {/* : */}
              <div class="nav-main-small" style={small ? smallBackground : null}>
                <button onClick={toggleNav} className="nav-small-button">{small ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                <ul class="nav-small-list" style={small ? smallStyle : null}>
                  <li className="nav-small-link"><Link onClick={closeNav} to="/blueocean">Home</Link></li>
                  <li className="nav-small-link"><Link onClick={closeNav} to="/blueocean/about">Services</Link></li>
                  <li className="nav-small-link"><Link onClick={closeNav} to="/blueocean/sample">Sample Pictures</Link></li>
                  <li className="nav-small-link"><Link onClick={closeNav} to="/blueocean/contact">Contact</Link></li>
                </ul>
              </div>
          {/* } */}
        </nav>
        <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={1000}
            >
            <Switch location={location}>
              <Route exact path="/blueocean" component={Home} />
              <Route exact path="/blueocean/about" component={About}/>
              <Route exact path="/blueocean/contact" component={Contact} />
              <Route exact path="/blueocean/sample" component={Sampleimage} />
            </Switch>
            </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default App;

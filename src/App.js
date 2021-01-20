import logo from './logo.svg';
import './App.css';

import Cover from './components/Cover.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import About from './components/About.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className='layout'>
      <div class='nav__list'>
                <ul>
                    <li><Link className="link" to="/"><button className="btn_square"></button></Link></li>
                    <li><Link className="link" to="/about"><p>ABOUT</p></Link></li>
                    <li><Link className="link" to="/projects"><p>PROJECTS</p></Link></li>
                    <li><Link className="link" to="/contact"><p>CONTACT</p></Link></li>
                </ul> 
            </div>
           
            <Switch>
              <Route exact path="/">
                <Cover/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/projects">
                <Projects/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
          </Switch>
          
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import About from "./Components/about";
import Head from "./Components/head";
import Proj from "./Components/proj";
import Edu from "./Components/education";
import "./Components/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="DivApp">
          <Head/>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <NavLink
                  to="/About"
                  className="nav-link"
                  activeStyle={{ display: "none" }}
                >
                  About Me
                </NavLink>
              </li>
                <li>
                <NavLink
                  to="/Edu"
                  className="nav-link"
                  activeStyle={{ display: "none" }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Proj"
                  className="nav-link"
                  activeStyle={{ display: "none" }}
                >
                  Projects
                </NavLink>
                </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/Edu" component={Edu} />
            <Route path="/Proj" component={Proj} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

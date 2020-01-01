import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

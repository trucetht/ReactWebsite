import React from 'react';
// Global Style
import GlobalStyle from './components/GlobalStyle';
// Import Pages
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import ProjectDetails from './pages/ProjectDetails';
// Router
import { Switch, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/work" exact>
          <MyWork />
        </Route>
        <Route path="/work/:id">
          <ProjectDetails />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
      
  );
}

export default App;

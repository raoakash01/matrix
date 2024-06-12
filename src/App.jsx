import React from 'react';
import Begining from './components/begining';
import Ignore from './components/ignore';
import Home from './components/home';
import Projects from './components/projects';
import Insights from './components/insights';
import Contact from './components/contact';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/" element={<Begining />} />
          <Route exact path="/ignore" element={<Ignore />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/insights" element={<Insights />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

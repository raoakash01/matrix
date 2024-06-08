import React from 'react';
import Begining from './components/begining';
import Ignore from './components/ignore';
import Home from './components/home';
import Projects from './components/projects';
import Insights from './components/insights';
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Begining />} />
        </Routes>
        <Routes>
          <Route exact path="/ignore" element={<Ignore />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route exact path="/insights" element={<Insights />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

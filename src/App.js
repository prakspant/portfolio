import React from 'react';
import './App.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/portfolio" element={<Layout />}>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Route>
        </Routes>
    );
  }
}

export default App;

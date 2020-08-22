import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import {ContactUs} from './components/pages/ContactUs';
import { AboutUs } from './components/pages/AboutUs';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/about-us' exact component={AboutUs} />
          <Route path='/contact-us' exact component={ContactUs} />
        </Switch>
        <Footer/>
    </Router>
    </>
    
  );
}

export default App;

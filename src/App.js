import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import OurChefs from './components/pages/OurChefs'
import Recipes from './components/pages/Recipes'
import SignUp from './components/pages/SignUp'
import ChickenMaryland from './components/pages/ChickenMaryland';
import Kaveri from './components/pages/Kaveri';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/our-chefs' component={OurChefs} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/chicken-maryland' component={ChickenMaryland} />
        <Route path='/kaveri' component={Kaveri} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

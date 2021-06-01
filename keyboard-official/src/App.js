import React from 'react'
import './App.css';
import {Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Price from './pages/Price/Price'
import Problem from './pages/Problem/Problem'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <div className='App-content'>
        <Header />
        <Switch>
          <Route path="/profile" component={Profile} /> 
          <Route path="/price" component={Price} /> 
          <Route path="/problem" component={Problem} /> 
          <Route path="/progress" component={Home} /> 
          <Route path="/" component={Home} /> 
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;

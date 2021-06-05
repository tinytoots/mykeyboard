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
          <Route path="/readme" component={Profile} /> 
          <Route path="/keycap" component={Price} /> 
          {/* <Route path="/problem" component={Problem} />  */}
          <Route path="/keyboard" component={Home} /> 
          <Route path="/" component={Home} /> 
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import './App.css';
import {Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Price from './pages/Price/Price'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className='App-content'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <Header />
        <Switch>
          <Route path="/readme" component={Profile} /> 
          <Route path="/keycap" component={Price} /> 
          {/* <Route path="/problem" component={Problem} />  */}
          <Route path="/keyboard" component={Home} /> 
          <Route path="/" component={Home} />  
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;

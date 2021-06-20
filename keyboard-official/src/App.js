import React from 'react'
import './App.css';
import {Redirect, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Price from './pages/Price/Price'
import Portfolio from './pages/Portfolio/Portfolio'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CreateProduct from './pages/Portfolio/CreateProduct';
import UpdateProduct from './pages/Portfolio/UpdateProduct';
import ViewProduct from './pages/Portfolio/ViewProduct';

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
          <Route path="/keyboard" component={Home} /> 
          <Route path="/portfolio" exact component={Portfolio} /> 
          <Route path="/portfolio/products" component={Portfolio} /> 

          {/* step 1 */}
          <Route path="/portfolio/add-product/:id" component={CreateProduct} /> 
          <Route path="/portfolio/view-product/:id" component={ViewProduct} /> 
          {/* <Route path="/portfolio/update-product/:id" component={UpdateProduct} />  */}
          <Route path="/" component={Home} /> 
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;

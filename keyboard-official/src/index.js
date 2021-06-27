import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './stat.js';
import Provider from './components/Provider';
import { AppContextProvider } from './components/Context';


const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <Provider>
        <App />
      </Provider>
    </AppContextProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
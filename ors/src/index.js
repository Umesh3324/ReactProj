import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
// import Login from './Login';
// import ResponsiveAppBar from './ResponsiveAppBar';
// import Login from './Login'; 
import AdminLogin from './AdminLogin';



ReactDOM.render(
    <React.StrictMode>
    {/* <Login/> */}
    <AdminLogin/>
  
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
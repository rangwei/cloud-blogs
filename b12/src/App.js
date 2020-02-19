import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

import Navbar from './Navbar';
import Content from './Content';


function App() {
  return (
    <div>
    <Navbar/>

    <Content/>
    </div>
    
  );
}

export default App;

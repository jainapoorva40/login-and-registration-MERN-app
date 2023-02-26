import './App.css';

import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
//import { Router } from 'react-router-dom';
//import { Route } from 'react-router-dom';
//import { Routes } from 'react-router-dom';
import {BrowserRouter as  Router,Route,Routes } from 'react-router-dom'
import {useState} from "react";
//import{ Router, Routes,Route} from "react-router-dom";

function App() {
  
  const[user, setLoginUser]=useState({

  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" 
          element={user && user._id ?
          <Homepage setLoginUser={setLoginUser}/>
          :
          <Login setLoginUser={setLoginUser}/>}>
          </Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;

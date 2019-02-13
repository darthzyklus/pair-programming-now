import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import Rounds from './Rounds.js';
import Dashboard from './Dashboard.js';
import {Link, Router } from "@reach/router";


const style = {}

style.ul = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: 'green', 
};
style.li = {
  display: 'block',
  color: 'white',
  textAlign: 'center',
  paddingLeft: 20,
  paddingRight: 20,
  textDecoration: 'none',
  float: 'left',
}
style.liA = {
  display: 'block',
  color: 'white',
  textAlign: 'center',
  paddingLeft: 20,
  paddingRight: 30,
  textDecoration: 'none',
  float: 'right',
}



const Nav = () => (
  <div>
    <nav>
      <ul style={style.ul}>

        <li ><Link to="/" style={style.li}><h1>Home</h1></Link></li>{" "}
        <li><Link to="/rounds" style={style.li}><h1>Rounds</h1></Link></li>
        <li><Link to="/dashboard" style={style.li}><h1>Dashboard</h1></Link></li>
        <li><Link to="/login" style={style.liA}><h1>Login</h1></Link></li>

      </ul>
    </nav>
    
    <Router>
      <Home path="/" />
      <Rounds path="/rounds"/>
      <Dashboard path="/dashboard"/>
      <Login path="/login"/>
    </Router>
  </div>

);

export default Nav;
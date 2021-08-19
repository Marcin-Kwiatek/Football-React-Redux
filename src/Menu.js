import React, {Component} from 'react';
import './Menu.css';
import {Link, Router} from "react-router-dom";


class Logo extends Component {
  render(){
  return (
    <div className = "navMenu" >
        <ul>
            <li><Link className='menuElement' className='menuElement' to='/'>Home</Link></li><br></br>
            <li><Link className='menuElement' to='/ballon'>Ballon d 'Or winners</Link></li><br></br>
            <li><Link className='menuElement' to='/championsLeague'>Champions League winners</Link></li><br></br>
            <li><Link className='menuElement' to='/worldChampionship'>World Championship winners</Link></li><br></br>
            <li><Link className='menuElement' to='/europeanChampionship'>European Championship winners</Link></li>
        </ul>
    </div>
  )}
}

export default Logo;

import './Logo.css';
import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Logo extends Component {
  render(){
  return (
    <>
      <div className="logo"><Link className='logoLink' to='/'>FOOTBALL</Link></div>
    </>
  )}
}

export default Logo;

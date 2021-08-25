import React, {Component} from 'react';
import './Menu.css';
import {Link} from "react-router-dom";
import { BiAlignJustify } from "react-icons/bi";


class Logo extends Component {
  state={
    leftMenu: '-50%'
  }
  render(){
  return (
    <>
      <div className = "navMenuSmallVersion" style={{left:this.state.leftMenu}} >
          <ul>
              <li><Link onClick={this.hideMenu} className='menuElement' className='menuElement' to='/'>Home</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/ballon'>Ballon d 'Or winners</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/championsLeague'>Champions League winners</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/worldChampionship'>World Championship winners</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/europeanChampionship'>European Championship winners</Link></li>
          </ul>
      </div>
      <div className = "navMenuBigVersion" >
          <ul>
              <li><Link onClick={this.hideMenu} className='menuElement' className='menuElement' to='/'>Home</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/ballon'>Ballon d 'Or winners</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/championsLeague'>Champions League winners</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/worldChampionship'>World Championship winners</Link></li><br></br>
              <li><Link onClick={this.hideMenu} className='menuElement' to='/europeanChampionship'>European Championship winners</Link></li>
          </ul>
      </div>
      <div class="nav__toggle">
        <BiAlignJustify onClick={this.shovMenu} style={{width:'100px', height:'50px',color:'white', marginTop:'30px'}}></BiAlignJustify>
      </div>
    </>
  )}
  shovMenu = () => {
    this.setState({leftMenu:'0%'})
  }
  hideMenu = () => {
    this.setState({leftMenu:'-50%'})
  }

}

export default Logo;

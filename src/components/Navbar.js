import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
import Beast from 'C:/Users/lenovo/Desktop/React/textutil/src/druid.png'
import DRL from 'C:/Users/lenovo/Desktop/React/textutil/src/car-lights.png'
import Dark from 'C:/Users/lenovo/Desktop/React/textutil/src/animal.png'
import Earth from 'C:/Users/lenovo/Desktop/React/textutil/src/trees.png'
// import { useState } from 'react'

export default function Navbar(props) {

  // let switches = document.getElementsByClassName('switch');

  // let style = localStorage.getItem('style');
  // if(style===null){
  //   setTheme('light')
  // }
  // else{
  //   setTheme(style);
  // }
  // for(let i of switches){
  //   i.addEventListener('click',function(){
  //     let theme = this.dataset.theme;
  //     setTheme(theme);
  //   })
  // }
  // function setTheme(theme){
  //   if(theme==='light'){
  //     document.getElementsById('switch-1');
  //     document.body.style.backgroundColor='White';
  //   }
  // }

  
  // const light=()=>{
  //   let newTheme=document.getElementsByClassName('switch-1');
  //   setTheme(newTheme);
  //   document.body.style.backgroundColor='White';
  //   document.body.style.color='Black';    
  // }
  


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href='#'> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>

      <div>
        <img className='switch-1 mx-2' id='switch-1' data-theme='light' onClick={props.light} style={{height:'5vh'}} src={Beast} alt="" />
        <img className='switch-2 mx-2' id='switch-2' data-theme='DRL' onClick={props.drl} src={DRL}   alt="" style={{height:'5vh'}} />
        <img className='switch-3 mx-2' id='switch-3' data-theme='Dark' onClick={props.Moon} src={Dark}  alt="" style={{height:'5vh'}} />
        <img className='switch-4 mx-2' id='switch-4' data-theme='Earth' onClick={props.earth} src={Earth} alt="" style={{height:'5vh'}} />
      </div>

        <div className={`form-check form-switch mx-2 text-${props.mode}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id='Switchmd'>Disable {props.mode} Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}


Navbar.propTypesropTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
}
Navbar.defaultProps={
    title:"Set title here",
    search:"Search here",
}
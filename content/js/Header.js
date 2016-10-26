import React from 'react';
import { Link } from "react-router";

export default class Header extends React.Component{

  render(){
    return(
      <div className="Header sticky-top">
        <div className="row-between ">
          <div className="padding color-yellow">
            <img src="" alt="" />
            <Link to="/" className="h5 header-link-fifa">HOME</Link>
          </div>
          <div className="row color-white">
            <div className="padding">
              <Link to="play" className="h5 header-link-menu">PLAY</Link>
            </div>
            <div className="padding">
              <Link to="signIn" className="h5 header-link-menu">SIGN IN</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

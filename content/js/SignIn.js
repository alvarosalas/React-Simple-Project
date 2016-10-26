import React from 'react';
import Header from './Header.js';

export default class SignIn extends React.Component{

  render(){
    return(
      <div>
      <Header />
      <div className="Container row-center">
        <div className="width-100 bg-image-sign-in">
          <div className="row-center padding-top">
            <div className="row-center-middle padding-top">
              <div className="col">
                <div className="padding-bottom padding-half-half-left">
                  <span className="h1 color-white padding-half-left">SIGN IN</span>
                </div>
                <div className="padding-top padding-half-bottom">
                  <input className="width-100" type="email" placeholder="Email"/>
                </div>
                <div className="padding-half-bottom">
                  <input className="width-100" type="password" placeholder="Password"/>
                </div>
                <div className="row-center padding-left-15">
                  <button>SING IN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

}

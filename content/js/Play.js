import React from 'react';
import Header from './Header.js';

export default class Play extends React.Component{

  render(){
    return(
      <div>
      <Header />
      <div className="Container row-center">
        <div className="width-100 bg-image-play"></div>
      </div>
      </div>
    );
  }

}

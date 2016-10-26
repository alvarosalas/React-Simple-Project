import React from 'react';

export default class Footer extends React.Component{

  render(){
    return(
      <div className="sticky-bottom footer row-center-middle">
        <div className="row">
          <span className="h7 color-white padding-right">Electronic Arts Inc</span>
          <span className="h7 color-white padding-right">Get Help</span>
          <span className="h7 color-white padding-right">About Us</span>
          <span className="h7 color-white padding-right">Contact Us</span>
        </div>
      </div>
    );
  }

}

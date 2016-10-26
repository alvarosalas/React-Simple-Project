import React from 'react';
import Header from './Header.js';

export default class Layout extends React.Component {

   render() {

       return (
        <div className="pos-stat">
           <Header />
           <div className="Container row-center">
             <div className="col width-100">
               <div className="width-100 bg-image">
                 <div className="col padding-top padding-left">
                   <span className="h1 color-white">EA SPORTS</span>
                   <span className="h1 color-yellow">FIFA17</span>
                 </div>
                 <div className="row-center-middle pos-abs width-100">
                   <div className="pos-rel width-100 row-center-middle top-285">
                     <div className="opacity-container pos-abs"></div>
                     <span className="h1 color-white padding-right">PLAT IT</span>
                     <span className="h1 color-yellow padding-left padding-right">FEEL IT</span>
                     <span className="h1 color-white padding-left">LIVE IT</span>
                    </div>
                 </div>
                </div>

             </div>
            </div>

           {this.props.childern}
        </div>
      );
   }
}

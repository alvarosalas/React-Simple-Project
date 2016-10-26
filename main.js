import React from 'react';
import ReactDOM from 'react-dom';
import Header from './content/js/Header.js'
import Layout from './content/js/Layout.js';
import Play from './content/js/Play.js';
import SignIn from './content/js/SignIn.js';
import Footer from './content/js/Footer.js';
import { Router, Route , IndexRoute, browserHistory } from 'react-router';

const container = document.getElementById('container');
const footer = document.getElementById('footer');


ReactDOM.render(<Router history={browserHistory}>
                  <Route path="/" component={Layout}></Route>
                  <Route path="play" component={Play}></Route>
                  <Route path="signIn" component={SignIn}></Route>
                </Router>, container);

ReactDOM.render(<Footer />, footer);

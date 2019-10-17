// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
// // import {
// //   Provider
// // } from 'react-redux'
// ReactDOM.render( < App / > ,

//   document.getElementById('root')
// )
// /*
//   // If you want your app to work offline and load faster, you can change
//   // unregister() to register() below. Note this comes with some pitfalls.
//   // Learn more about service workers: https://bit.ly/CRA-PWA */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
// import registerServiceWorker from './registerServiceWorker';
// let cards = []
// for (let i = 1; i < 53; i++) {
//   let obj = {
//     type: Math.ceil(i / 13),
//     dragable: false,
//     now: 3 //現在位置  1:左上 2:右上 3:下面;
//   }
//   cards.push(obj);
// }
// console.log(cards)
ReactDOM.render(
  <Provider store={store}>
    {' '}
    {/* <Router path="/" exact component={App} /> */} <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
// registerServiceWorker();

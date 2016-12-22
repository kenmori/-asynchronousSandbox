// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import Rx from 'rx';



var str: number = 'hello world!';
console.log(str);
class Greet extends Component {
 render() {
    console.log(Rx);

     Rx.Observable.from([1, 2, 3, 4])
         .subscribe(s => console.log(s));

  return (
   <ul id='result'>
      fafa
      </ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


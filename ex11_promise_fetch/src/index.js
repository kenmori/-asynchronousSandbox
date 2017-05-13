import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import { Promise } from 'es6-promise';



class Greet extends Component {
 render() {
  var img = document.createElement('img');
  fetch('./tap.jpeg').then(function(response){
   return response.blob();
  }).then(function(myBlob){
   img.src = URL.createObjectURL(myBlob);
   document.body.appendChild(img);
  })
  return (
   <ul id='result'>
       <li><img src='' /></li>
      </ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


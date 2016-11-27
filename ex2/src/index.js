import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';


class Greet extends Component {
 render() {
   function hidouki(url){
    return new Promise(function(resolve, reject){
     var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
     console.log("fafa")
      if(req.status == 200){
       resolve(req.response);
      } else {
       reject(Error(req.statusText));
      }
     }
     req.onerror = function(){
       reject(Error("Network Error"))
     }
     req.send();
   })
  }
  async function asyncFunction (url){
   var result = await hidouki(url);
   return result;
  }
  asyncFunction('http://localhost:3000/posts')
      .then((res)=> asyncFunction('http://localhost:3000/comments'))
      .then((res)=> asyncFunction('http://localhost:3000/profile'))
      .then((res)=> asyncFunction('http://localhost:3000/state'))
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


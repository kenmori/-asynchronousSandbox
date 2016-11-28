import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';


class Greet extends Component {
 render() {
   function hidouki(url, num){
    return new Promise(function(resolve, reject){
     var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
     console.log(num)
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
  async function asyncFunction (url, num){
   var result = await hidouki(url , num);
   console.log(result);
   return result;
  }
  asyncFunction('http://localhost:3000/comments', 1)
      .then((res)=> asyncFunction('http://localhost:3000/posts', 2))
      .then((res)=> asyncFunction('http://localhost:3000/profile', 3))
      .then((res)=> asyncFunction('http://localhost:3000/state', 4))
      .then(() => console.log('done!'))
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


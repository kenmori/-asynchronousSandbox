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
  async function asyncFunction (){
   const result = await hidouki('http://localhost:3000/posts', 1);
   console.log(result);
   const result2 = await hidouki('http://localhost:3000/comments', 2);
   console.log(result2);
   const result3 = await hidouki('http://localhost:3000/profile', 3);
   console.log(result3);
   const result4 = await hidouki('http://localhost:3000/state', 4);
   console.log(result4);
   console.log('done!');
  }
  asyncFunction();
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


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
         console.log(req.response)
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
  async function ii (){
   var uu = await hidouki('http://localhost:3000/posts');
   console.log(uu);
  }
  ii();
  console.log("done")
  return (
          <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


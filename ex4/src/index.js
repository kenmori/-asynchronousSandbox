import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import co from 'co'


class Greet extends Component {
 render() {
  co(function *(){
   // yield any promise
   var result = yield Promise.resolve(true);
   console.log(result);
  }).catch(onerror);

  var fn = co.wrap(function* (fa){
    return yield Promise.resolve(fa);
  });
  fn(true).then(function(val){console.log(val)})

  const promiseFun = co.wrap( function* (url){
   return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function(){
     if(req.status == 200){
      setTimeout(()=>{
       //5秒後にdone
       resolve(req.response);
     }, 5000)
     } else {
      reject(Error("error"));
     }
    }
    req.onerror = function(){
      console.log("error");
    }
    req.send(null);
   });
  })

  //並列処理
  // promiseFun('http://localhost:3000/comments').then((res)=> console.log(res))
  co(function* (){
   var res = yield [
    promiseFun('http://localhost:3000/posts'),
    promiseFun('http://localhost:3000/profile'),
    promiseFun('http://localhost:3000/state'),
   ];
   console.log(res[0], res[1], res[2]);
  }).catch(onerror);
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


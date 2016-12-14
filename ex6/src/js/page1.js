import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import co from 'co';

export class Greet extends Component {
 render() {
  co(function *(){
   // yield any promise
   var result = yield Promise.resolve(true);
   console.log(result);
  }).catch(onerror);

  var fn = co.wrap(function* (fa) {
   return yield Promise.resolve(fa);
   console.log(fafa.add(fafaa.num));
  });

  //1 ジェネレータ、ジェネレータ関数、ジェネレータを返す関数をresolveするPromiseを返します。
  co(function* () {
   return yield Promise.resolve(true);
  }).then(function (val) {
   console.log(val);
  }, function (err) {
   console.error(err.stack);
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
      console.log("errofar");
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
    promiseFun('http://localhost:3000/stafaff'),
   ];
   console.log(res[0], res[1], res[2]);
  }).catch(onerror);


  function onSuccess(result) {
   console.log('fafafa', result)
  }
  function onError(e) {
   console.log('error', e)
  }


  let p = co.wrap(function *(i){
   return yield new Promise((resolve, reject) => {
    return i%2 === 0 ? reject(new Error(i)) :resolve(i)
   });
  });
  p(1).then(onSuccess).catch(onError)

  return (
   <ul id='result'>fafa</ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})



module.exports = {
 test: function(){console.log(add(10))}
}
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import co from 'co'


class Greet extends Component {
 render() {


  //1 ジェネレータ、ジェネレータ関数、ジェネレータを返す関数をresolveするPromiseを返します。
  co(function* () {
   return yield Promise.resolve(true);
  }).then(function (val) {
   console.log(val);
  }, function (err) {
   console.error(err.stack);
  });

  //2 渡した数だけ1秒ごとに数える
  function sleep(i){
   return new Promise(function(resolve){
    setTimeout(resolve,1000);
   })
  };

  var num = co.wrap(function* (num){
    for(var i = 1; i <= num; i++) {
     yield sleep(i);
     console.log(i)
    }
     yield sleep(1)
   })

  num(5).then(function(num){
   console.log("done")
  });

  //3
  // var fn = co.wrap(fn*)
  //generatorをPromiseを返す関数にする
  var fn = co.wrap(function* (val) {
   return yield Promise.resolve(val);
  });

  fn("fafa").then(function (val) {
    console.log(val);
  });


  //4
  // co(function *(){
  //  // yield any promise
  //  var result = yield Promise.resolve(true);
  //  console.log(result);
  // }).catch(onerror);
  //
  // var fn = co.wrap(function* (fa){
  //   return yield Promise.resolve(fa);
  // });
  // fn(true).then(function(val){console.log(val)})


  //5
  // coを使わない場合の1秒ごとに出力する
  // var i = 0;
  // var timer = function() {
  //  console.log(i);
  //  i++;
  //
  //  if (i < 5) {
  //   setTimeout(timer, 1000);
  //  }
  // };
  // timer();

  //5 coを使う //forが使えるようになる
  // const sleep = (ms) => {
  //  return new Promise((resolve) => {
  //       setTimeout(resolve, ms);
  //      });
  // };
  // co(function*() {
  //  for(let i = 0; i < 5; i++){
  //   console.log(i);
  //   yield sleep(1000);//Promiseの処理が解決されるまで待機
  //  }
  // });

  //6
  // const timer2 = (str, ms) => {
  //  return new Promise((resolve) => {
  //       console.log(str);
  //       setTimeout(()=> {
  //        resolve();
  //       }, ms);
  //      });
  // };
  //
  // co(function* (){
  //   yield timer2('fa', 1000);
  //   yield timer2('fafafa', 1000);
  //   yield timer2('nununu', 1000);
  //   yield [timer2('3', 1000), timer2('4', 1000), timer2('5', 1000)]
  //   yield timer2('6', 1000);
  // })



  //7
  // const promiseFun = co.wrap( function* (url){
  //  var fafa =  yeild new Promise(function(resolve, reject){
  //   var req = new XMLHttpRequest();
  //   req.open('GET', url, true);
  //   req.onload = function(){
  //    if(req.status == 200){
  //     resolve(req.response);
  //    } else {
  //     reject(Error("error"));
  //    }
  //   }
  //   req.onerror = function(){
  //     console.log("error");
  //   }
  //   req.send(null);
  //  });
  //  return fafa;
  // })

  // promiseFun('http://localhost:3000/comments').then((res)=> console.log(res))
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


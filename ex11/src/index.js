import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import 'whatwg-fetch';
import { Promise } from 'es6-promise';



class Greet extends Component {
 render() {
  function test(val){
   return new Promise(function(resolve, reject){
    resolve("fafa");
   });
  }
  test("start").then(function(val){
   alert(fetch);
  }, function(){
   alert("エラー")
  });
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


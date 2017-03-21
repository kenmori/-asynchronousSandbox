import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';


class Greet extends Component {
 render() {

  return (
   <ul id='result'>fafafa</ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


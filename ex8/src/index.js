// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rx';
import {readonly} from './decorate/readonly';


@readonly
class Greet extends Component {
@deprecate('hittta')
 say(){
  return `my name is ${this.name}!!`
 }
 render() {
  return (<div>eee</div>);
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})


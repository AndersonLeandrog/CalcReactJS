import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends React.Component{
  handleClick() {
    var altura, peso, x;
    altura = document.getElementsByTagName('input')[0].value;
    peso = document.getElementsByTagName('input')[1].value;
    
    x = Math.round(peso / (altura * altura));

    if (x < 18) {
      document.querySelector('.value').innerHTML= x + 'm';
      document.querySelector('.set').style.marginLeft='155px';
    } else if (x >= 18 && x  < 24) {
      document.querySelector('.value').innerHTML= x + 'nm';
      document.querySelector('.set').style.marginLeft='0px';
    } else if (x >= 24 && x  < 29) {
      document.querySelector('.value').innerHTML= x + 'sp';
      document.querySelector('.set').style.marginLeft='130px';
    } else if (x >= 29 && x  < 35) {
      document.querySelector('.value').innerHTML= x + 'og1';
      document.querySelector('.set').style.marginLeft='155px';
    } else if (x >= 35 && x  < 39) {
      document.querySelector('.value').innerHTML= x + 'og2';
      document.querySelector('.set').style.marginLeft='200px';
    } else if (x > 40) {
      document.querySelector('.value').innerHTML=  x + 'og3';
      document.querySelector('.set').style.marginLeft='230px';
    } 
  }

  render() {
    return (
      <div className="container">
        <nav></nav>
        <div className="lcd">
          <p className="value"></p>
        </div>
        <input type="text" />
        <input type="text" />
        <button onClick={this.handleClick}>calcular</button>
        <Info />
        <State />
      </div>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <ul>
          <li>m = magro</li>
          <li>nm = normal</li>
          <li>sp = sobrepeso</li>
          <li>og1 = obesidade grau 1</li>
          <li>og2 = obesidade grau 2</li>
          <li>og3 = obesidade grau 3</li>
        </ul>
      </div>
    );
  }
}

class State extends React.Component {
  render() {
    return (
      <div className="state">
        <p className="title">Status</p>
        <div className="bar"></div>
        <div className="set"></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

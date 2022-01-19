import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import State from "../src/component/State";
import TicketControl from '../src/component/TicketControl'

class App extends Component {


  render() {
    return (
      <div>
        <State />
      </div>

    )
  }
}

export default App;

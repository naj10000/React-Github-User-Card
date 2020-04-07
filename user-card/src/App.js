import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      user: []
    };

  }

  componentDidMount(){
    axios.get("https://api.github.com/users/naj10000")
          .then(response => {
            this.setState({
              user: response
            })
            console.log(response)
          })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}



export default App;

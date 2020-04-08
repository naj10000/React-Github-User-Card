
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './User';
import Followers from './Followers';

 class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      follower: []
    };

  }

  

 

  componentDidMount(){
    axios.get("https://api.github.com/users/naj10000")
          .then(response => {
            this.setState({
              user: [response.data]
              

            })
            console.log(response)
          });

          axios.get("https://api.github.com/users/naj10000/followers")
          .then(response => {
            this.setState({
              follower: [...response.data]
              

            })
            console.log(response.data)
          })

  }

  




  render() {
    return (
      <div>
        <div>
       <UserCard user={this.state.user} key={this.state.user.id}/>
       </div>
       <div>
       <Followers follower={this.state.follower} key={this.state.follower.id}/>
       </div>
      </div>
     
    )
  }
}



export default App;

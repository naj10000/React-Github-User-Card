import React, { Component } from 'react';
import axios from 'axios';

 function Followers(props){

   return (
            <div className="container">
                {props.follower.map(follower=> (
                    <div className="cards">
                        
                        <div className="card">
                        <img width="200" src={follower.avatar_url} key={follower.id}/>
                <h2 className="username">UserName: {follower.login}</h2>

                </div>
                    </div>
                ))}
            </div>
        )

}

export default Followers




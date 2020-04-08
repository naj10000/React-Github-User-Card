import React, { Component } from 'react';
import axios from 'axios';

 function Followers(props){

   return (
            <div>
                {props.follower.map(follower=> (
                    <div>
                        <img width="200" src={follower.avatar_url} key={follower.id}/>
                <h2>{follower.login}</h2>
                    </div>
                ))}
            </div>
        )

}

export default Followers




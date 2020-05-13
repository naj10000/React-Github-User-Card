import React from 'react'

export default function User(props) {
    return (
        <div className="container">
            {props.user.map(user => (
                <div className="cards">
             
             <div className="card">
             <img width="200" src={user.avatar_url} />
            <h2 className="username">UserName: {user.login}</h2>
            
            </div>
            </div>
            ))}
        </div>
    )
}

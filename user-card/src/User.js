import React from 'react'

export default function User(props) {
    return (
        <div>
            {props.user.map(user => (
                <div>
             <img width="200" src={user.avatar_url} />
            <h2>UserName:{user.login}</h2>

            </div>
            ))}
        </div>
    )
}

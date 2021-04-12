import React from 'react'

function Details({user}) {
    return (
        <div>
            <p>Last Name : {user.lastName} <br/>
            Age: {user.age} <br/>
            Gender: {user.gender}</p>
        </div>
    )
}

export default Details;

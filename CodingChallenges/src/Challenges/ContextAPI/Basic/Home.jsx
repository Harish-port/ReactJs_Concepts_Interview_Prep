import React from 'react'
import { useContext } from 'react'
import { UserContext } from './userContext';

function UserHome() {
    const { userName } = useContext(UserContext)
    console.log(userName, "userName");

    return (
        <div>userName:</div>
    )
}

export default UserHome
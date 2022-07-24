import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeInputAction, addUserAction, clearUserAction} from "../../actions/actions";

function UsersPage () {
    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.users.inputValue)
    const users = useSelector(state => state.users.users)

    

    const inputChange = (e) => {
        
        dispatch(changeInputAction(e.target.value))
    }

    const addUser = () => {

        dispatch(addUserAction(inputValue))

        dispatch(clearUserAction(inputValue))
    }

    

    return (
        <div>

            
            <input type = "text" onChange={inputChange} value = {inputValue}/>
            <button onClick={addUser}>create user</button>
            <ul>
                {users.map(user => <li>{user}</li>)}
            </ul>
        </div>
    )
}



export default UsersPage;
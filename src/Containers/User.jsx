import React from 'react'
import './User.css';
import { setActiveUserId } from './../Redux/Actions';
import store from './../Redux/Store';

const User = ({user}) => {
    const {name, profile_pic,status} = user;
    // The name, profile_pic URL and status of the user 
    //are gotten from the props via 
    //destructuring: const { name, profile_pic, status } = user;

    return (
        <div className = "User" onClick = {handleUserClick.bind(null,user)} >
            <img src ={profile_pic} alt = {name} className = "User__pic" />
            <div className = "User__details">
                <p className = "User_details-name">{name}</p>
                <p className = "User_details-status">{status}</p>
            </div> 
        </div>
    );
};
function handleUserClick({user_id}){
    // console.log(user_id);
    store.dispatch(setActiveUserId(user_id));   
}

export default User;



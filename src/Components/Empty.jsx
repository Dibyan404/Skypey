import React from 'react';
import './Empty.css';

const Empty = ({user}) => {
    const {name,profile_pic,status} = user;
    //Using the ES6 destructuring syntax, grab the name, profile_pic and status from the user object
    const first_name = name.split(" ")[0];
    //spits out a chunk of markup.

    return(
        <div className ="Empty">
            <h1 className = "Empty__name">Welcome, {first_name}</h1>
            <img src= {profile_pic} alt={name} className="Empty__img" />
            <p className = "Empty__status">
                <b>Status:</b>{status}

            </p>
            <button className = "Empty__btn"> Start a converstation</button>
            <p className="Empty__info">Search for someone to start chatting with or go to Contacts to see who is avialable</p>
        </div>
    )
}

export default Empty;
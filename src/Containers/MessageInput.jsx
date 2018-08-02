import React from 'react';
import store  from './../Redux/Store';
import {setTypingValue,sendMessage} from './../Redux/Actions';
import './MessageInput.css';

const MessageInput = ({value}) =>  {
    const state = store.getState();
    const handleInput = e =>{
        store.dispatch(setTypingValue(e.target.value));

    }
    const handleSubmit = e =>{
        e.preventDefault();
        const {typing,activeUserId} = state;
        store.dispatch(sendMessage(typing,activeUserId));
    };  

    return(
        <form className="Message" onSubmit = {handleSubmit}>
            <input 
            onChange = {handleInput}
            placeholder = "Hold your head before typing"
            value ={value}
            className="Message__input"
            
            />
        </form>
    )
}

export default MessageInput;

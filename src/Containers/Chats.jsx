import React, { Component } from 'react'
import './Chats.css';

const Chat = ({message}) => {
    const {text,is_user_msg} = message;
    return (
        <span className = {`Chat ${is_user_msg ? "is-user-msg":""}`}>{text}</span>

    )
}



class Chats extends  Component{
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
        // this.scrollToButtom = this.scrollToButtom.bind(this);
        //This is a new way to create Refs.
    }

    componentDidMount(){
        this.scrollToButtom();

    }

    componentDidUpdate(){
        this.scrollToButtom();
    }
    // So, as soon as the component mounts, we invoke a scrollToBottom function. 
    //We do the same whenever the app updates, too!
    scrollToButtom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
        //All we are doing is updating the scrollTop property to match the scrollHeight
        //this.chatsRef.current refers to the DOM node in question.
    }
    render(){
        return(
            <div className = "Chats" ref={this.chatsRef}>
                {this.props.messages.map(message=>(
                    <Chat message ={message} key={message.number} />

                ))}
            </div>
        )
    }
}

export default Chats;

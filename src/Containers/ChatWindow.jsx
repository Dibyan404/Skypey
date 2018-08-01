import  React  from 'react';

const ChatWindow = ({activeUserId}) =>{
    return(
        <div className = "ChatWindow">
                Conversation for the user id: {activeUserId}
        </div>
    )
   
}

export default ChatWindow;
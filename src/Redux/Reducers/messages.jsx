import {getMessages} from './../../static_data';
import {SEND_MESSAGE}  from './../Actions/Constants/action-types';
import _ from 'lodash';


export default function messages(state=getMessages(10),action){

        switch (action.type) {
            case SEND_MESSAGE:
                const {message, userId} = action.payload; //referencing to the message and userId passed in from the action
                const allUserMsgs = state[userId]; //to goon its important to grab the active user's messages.
                //as we know state here is n't the overall state object of the application. 
                //No, its the state managed by the reducer from the messges field.
                //Since every contact's message is mapped with the user ID, the above gets the messages for 
                //the specific user ID passed in from the action.

                const number = +_.keys(allUserMsgs).pop() + 1;
                //for every number there is a unique id, for incoming messages to have unique ID,
                // _.keys(allUserMsgs) will return an array of allkeys of the user's messages
                //_.keys is like Object.keys(). The only difference is that 
                //we are using helper method from the lodash.
                //allUserMsgs contains the User's message/
                //Array.pop() is used to retrieve the last item in the array.
                //Once that's retrieved, we add +1 to it, Making sure that the new 
                //message gets +1 of the highest number of the avialable messages.
                // if you are wondering why theres a + infront, its because the result is converted in number 
                //instead of string.
                return {
                    ...state,
                    //we don't want to mess the previous messages in the application
                    [userId]:{
                        //because of using the Obj notation, we can easily grab the messages the particular user id with  [userId]
                        ...allUserMsgs, //to make sure that all of the user's messages are untouched
                        [number]: { //finally we add the new message object with the previously computed number!

                            number,
                            text:  message,
                            is_user_msg: true
                        }
                    }
                };
            default:
                return state
        }
    
    // return state;
}

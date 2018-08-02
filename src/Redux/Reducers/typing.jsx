import {SET_TYPING_VALUE, SEND_MESSAGE} from './../Actions/Constants/action-types';

export default function typing (state = "",action){
    switch (action.type){
        case SET_TYPING_VALUE:
            return action.payload;
         //handles the set_typing_value action type   
        case SEND_MESSAGE:
            return ""; 
         default: 
            return state;
    }
}
import {generateUser} from './../../static_data';

export default function user(state = generateUser(),action){
    return state;
    
}
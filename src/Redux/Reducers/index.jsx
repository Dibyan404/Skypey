import user from './user';
import contacts  from './contact';
import {combineReducers} from 'redux';
import activeUserId from './activeUserId';


export default combineReducers({
    user,
    contacts,
    activeUserId
}); 
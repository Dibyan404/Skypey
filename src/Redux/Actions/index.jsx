import {SET_ACTIVE_USER_ID} from './Constants/action-types';

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
    //the action payload contains the user_id of the user contact.
});
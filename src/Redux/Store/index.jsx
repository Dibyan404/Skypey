import { createStore } from 'redux';
import reducer from './../Reducers';
import { contacts } from './../../static_data';




const store = createStore(reducer,{contacts});

export default store;

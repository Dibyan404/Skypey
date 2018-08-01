import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/Store';
import register from './registerServiceWorker';



const render = () =>{ 
    fancyLog();
    ReactDOM.render(<App />, document.getElementById('root'));
}

render();
store.subscribe(render);
register();

function fancyLog(){
    console.log("%c Rendered with 👉 👉👇","background: purple; color: #fff");
    console.log(store.getState());
}
import React, { Component } from 'react';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import _ from 'lodash'; 
import './App.css';
import  store  from '../Redux/Store';



// const state = {
//   user: {
//       name: 'Dibyan Maharjan',
//       email: 'asdfsd@gmail.com',
//       profile_pic:"https://fake-img0-url",
//       status:"Author, Understanding Flex box",
//       user_id:"H12I-3vNk7"
//   },
//   messages: {
//           "JUIZN-VyX": {
//             0:{
              
//               is_user_msg:false,
//               number:0,
//               text: "Hello Man!"
//             },
        
//           1: {
//             is_user_msg: true,
//               number: 1,
//               text: "Doing Great. You?"
//           }
//         },
//         "SIzUW2-bEkm": {
//           0: {
//             is_user_msg:false,
//             number:0,
//             text: "You know Redux?"
//           },
//           1:{
//             is_user_msg:false,
//             number:1,
//             text: "I do. Any gig?"
//           }
//         }

//   },
//   typing: '',
//   contacts: {
//           "JUIZn-VyX": {
//             name:"John Doe",
//             email:"fake@gmail.com",
//             profile_pic: "https://fake-url",
//             status: "bha bah ba",
//             user_id: "JUIZn-VyX"
//           },
//           user_id_2: {
//             name:"JD Joe",
//             email:"fakeD@gmail.com",
//             profile_pic: "https://fake-url-s",
//             status: "bha bah sd ba",
//             user_id: "SIzUW2-bEkm"
//           }
//         },
//         activeUserId: "SIzU2-bEkm"
// };


class App extends Component {
  
  
  render() {
    // const {contacts} = store.getState();
    const {contacts,user,activeUserId} = store.getState(); 

    return (
      <div className="App">
        <Sidebar contacts = {_.values(contacts)} />
        <Main user = {user} activeUserId = {activeUserId} />
      </div>
    );
  }
}

export default App;

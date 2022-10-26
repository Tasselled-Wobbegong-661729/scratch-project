import React from "react";
// import ReactDom from "react-dom";
import {useState} from 'react';
import Signup from "./Signup";
import Login from "./Login";
import TripContainer from './containers/TripContainer'
import axios from "axios";
import './styling/sitewide.scss';

//main container
//routers 
function App (){
  const [signupButton, setSignupButton] = useState(false)

  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const handleClick = e => {
    e.preventDefault();
    console.log('button clicked!')
    server
    .get('/')
    .then((res) => console.log(res))
    .catch((err) => {
      console.error(err);
    });
  }


    return (
<div className="App">
      <main>
        <h1>Welcome to the travel packing App !</h1>
        <br /><br />
        {/* <Login className="login"></Login> */}
        <br />
        <button onClick={handleClick}>Testing Backend</button>
        <button onClick = {() => setSignupButton(true)}>Sign Up!</button>
        {/* <Signup trigger={signupButton} setTrigger={setSignupButton}>  */}
        {/* </Signup>  */}
      </main>
      <div> 
        {/* <TripContainer></TripContainer> */}
    </div>
    </div>

    )
}
export default App;

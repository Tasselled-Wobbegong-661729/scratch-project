import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import {useState} from 'react';
// import components";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PackingList from './components/PackingList';
import TripDetailsForm from './components/TripDetailsForm.js'
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
    <>
      <nav id="navbar">
        <section id='left-nav'>
          <img></img>
        </section>
        <section id='right-nav'>
          <Link to='/Login'>
          <button id='login-btn' className='nav-btns'>Log in</button>
        </Link>
        <Link to='/Signup'>
          <button id='signup-btn' className='nav-btns'>Sign up</button>
        </Link>
        </section>
      </nav>
      <Routes>
        <Route 
          path='/'
          element={<TripDetailsForm />}
        />
        <Route 
          path='/Login'
          element={<Login />}
        />
        <Route 
          path='/Signup'
          element={<Signup />}
        />
        <Route 
          path='/PackingList'
          element={<PackingList />}
        />
      </Routes>
    </>
  )
}
export default App;

// {/* <div className="App">
//       <main id='title'>
//         <h1>Welcome to carryON!</h1>
//         <br />
//         <button onClick={handleClick}>Testing Backend</button>
//         <button onClick = {() => setSignupButton(true)}>Sign Up!</button>
//         {/* <Signup trigger={signupButton} setTrigger={setSignupButton}> 
//         {/* </Signup>  
//       </main>
//       <div> 
//         {/* <TripContainer></TripContainer> 
//     </div>
//     </div> */}
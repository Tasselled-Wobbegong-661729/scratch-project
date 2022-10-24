
import Signup from './component/Signup';
import Login from './component/Login'
import Button from 'react-bootstrap/Button'

import {useState} from 'react';
function App() {
  const [signupButton, setSignupButton] = useState(false)

  return (

    <div className="App">
      <main>
        <h1>Welcome to the travel packing App !</h1>
        <br /><br />
        <Login className="login"></Login>
        <br />
        <Button onClick = {() => setSignupButton(true)}>Sign Up!</Button>
        <Signup trigger={signupButton} setTrigger={setSignupButton}> 
        </Signup> 
      </main>
    </div>


  );
}

export default App;

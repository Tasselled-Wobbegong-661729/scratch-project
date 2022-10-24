import React, { useState } from 'react';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log()
  }

  return (
    <div className="logindiv">
      <form>
        <div className="form-group text-left">
          <label></label>
          <input placeholder="Enter email"/>
        </div>
        <br></br>
        <div className="form-group text-left">
          <label></label>
          <input placeholder="Password"/>
        </div> 
        <br></br>

        
        <button type="submit" className="login-btn" >
          Log In
        </button>

      </form>

    </div>
  );
}
export default Login;

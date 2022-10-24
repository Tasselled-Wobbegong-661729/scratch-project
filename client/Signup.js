import React, { useState } from 'react';

function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0 && username.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (props.trigger) ? (
    <div className="signup">
      <div className="signup-inner">
        <form>
          <div className="form-group text-left">
            <label />
            <input placeholder="Enter email" />
          </div>
          <br />
          <div className="form-group text-left">
            <label />
            <input placeholder="Password" />
          </div>
          <br />

          <button type="submit" className="signupinner-btn">
            Sign Up!
          </button>

        </form>
        <button className='close-signup' onClick={() => props.setTrigger(false)}>close</button>
        {props.children}
      </div>

    </div>
  ) : '';
}

export default Signup;

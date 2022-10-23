import React from 'react'
import {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signup.css'
function Signup(props) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0 && username.length > 0;
    }
    function handleSubmit(event){
        event.preventDefault();
    }

    return (props.trigger) ? (
        <div className='signup'>
            <div className='signup-inner'>
            <Form onSubmit = {handleSubmit}>
                <h3>Please Fill Out All Fields</h3>
                <Form.Group className='username' size="lg" controlId= "email">
                <Form.Label></Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    placeholder = "Email"
                    value={email}
                    onChange={(e) =>{setEmail(e.target.value) }}
                />
                </Form.Group>
                    <br />
                <Form.Group className='password' size="lg" controlId= "password">
                    <Form.Label></Form.Label>
                    <Form.Control
                        type="password"
                        placeholder = "Password"
                        value={password}
                        onChange={(e) =>{setPassword(e.target.value) }}
                    />
                </Form.Group>
                <br />

                <Button className='submitSignup' variant="primary" block size="s" type="submit" disabled={!validateForm()}>
                Sign Up For Free
                </Button>{' '}
            </Form>
                <Button className='close-signup' onClick={() => props.setTrigger(false)}>
                    close
                </Button>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Signup
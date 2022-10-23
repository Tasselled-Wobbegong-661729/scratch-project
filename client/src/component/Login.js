/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // user input must not be empty
    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }


    return (
        <div className='logindiv'>
            <Form onSubmit = {handleSubmit}>
                <Form.Group className='username' size="lg" controlId= "email">
                <Form.Control
                    autoFocus
                    type="email"
                    placeholder = "Email or Username"
                    value={email}
                    onChange={(e) =>{setEmail(e.target.value) }}
                />
                </Form.Group>
                    <br />
                <Form.Group className='password' size="lg" controlId= "password">
                    <Form.Control
                        type="password"
                        placeholder = "Password"
                        value={password}
                        onChange={(e) =>{setPassword(e.target.value) }}
                    />
                </Form.Group>
                <br />

                <Button className='loginbtn' variant="primary" block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>{' '}
            </Form>
        </div>
    )
}
export default Login
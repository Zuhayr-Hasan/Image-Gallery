import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { BiSolidPaintRoll } from 'react-icons/bi';
import { auth, googleProvider } from "../utils/firebase";
import { BiSolidError } from 'react-icons/bi';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import handleAuthErrors from '../utils/handleAuthError';
// import { signupWith }
import { Link } from 'react-router-dom'

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  background: ${(props) => props.bg || '#fff'};
  color: ${(props) => props.color || '#000'};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.hv || 'rgba(255, 255, 255, 0.8)'};
  }

  > * {
    pointer-events: none;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: -40px;

  div {
    width: 100%;
    max-width: 350px;

    @media screen and (max-width: 370px) {
      max-width: 300px;
    }

    p {
      margin-bottom: 20px;

      a {
        color: #aaa;
      }
    }
  }
`

const Form = styled.form`
  width: 400px;
  input {
    diplay: block;
    background: #242424;
    color: #f0f0f0;
    marign-bottom: 20px;
    padding: 15px 15px;
    width: 100%;
    border-radius: 10px;
    height: 45px;
    border: none;
    font-size: 16px;
    outline: none;

    &:hover {
      background: #2b2b2b;
    }
    
    &:focus {
      border: 2px solid #464EB8;
    }
  }
`

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (errorDescription) {
      let errorMsg = handleAuthErrors(errorDescription);
      console.log(errorMsg);
      console.log(email, password);
      setError(errorMsg);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ height: '100vh' }}>
       <h1 className='authPageLogo vertical-center' style={{color: '#7B83EB', height: '10%' }}>
        <BiSolidPaintRoll style={{marginRight: '15px', width: '30px', height: '30px'}}/>
        Piczer
      </h1>
      <Container style={{height: '90%'}}>
        <h1 style={{marginTop: '60px'}}>Signup</h1>
        <div className='form-separator-large'></div>
        <Button bg={'#242424'} hv={'#2b2b2b'} color={'rgba(255, 255, 255, 0.6)'} style={{ width: '400px', marginTop: '-90px', padding: '15px 10px' }} onClick={signInWithGoogle}>
          <FcGoogle
            style={{
              verticalAlign: 'middle',
              fontSize: '25px',
              marginRight: '10px',
            }}
          />
          Login with Google
        </Button>
        { error && <p className='auth-msg' style={{marginTop: '25px', borderRadius: '5px'}}><BiSolidError style={{color: "#ff3769", width: '25px', height: '25px', marginRight: 15}}/> {error}</p> }

        <div className='form-separator'>
          <p></p>
        </div>

        <Form onSubmit={signIn}>
          <label style={{color: '#f0f0f0'}}>
            Email:
            <input
              name='email'
              type='email'
              placeholder='Type your email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label style={{ marginTop: 30, color: '#f0f0f0'}}>
            Password:

            <input
              name='password'
              type='password'
              placeholder='Type your password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button
            color='white'
            bg="#505AC9"
            hv='#464EB8'
            style={{ marginTop: '25px' }}
          >
            Continue
          </Button>
          <div className='form-separator'></div>
          <p className='center' style={{marginTop: '-10px'}}>
            Member already?{' '}
            <a>
              <Link className="color-purple" to="/">Click to login.</Link>
            </a>
          </p>
        </Form>
      </Container>
    </div>
  )
}

export default Signup

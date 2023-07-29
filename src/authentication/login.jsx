import * as React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  background: ${(props) => props.bg || '#fff'};
  color: ${(props) => props.color || '#000'};
  border: 0;
  border-radius: 5px;
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
  width: 500px;
  input {
    diplay: block;
    marign-bottom: 20px;
    padding: 10px 15px;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
`

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <div>
      <h1 className='authPageLogo'>Piczer</h1>
      <Container>
        <h1>Login</h1>
        <div className='form-separator-large'></div>
        <Button style={{ width: '500px' }}>
          <FcGoogle
            style={{
              verticalAlign: 'middle',
              fontSize: '25px',
              marginRight: '10px',
            }}
          />
          Login with Google
        </Button>
        <div className='form-separator'>
          <p>Or</p>
        </div>

        <Form>
          <label>
            Email:
            <input
              name='email'
              type='email'
              placeholder='Type your email'
              required
            />
          </label>
          <label>
            Password:
            <p style={{ float: 'right' }}>
              <Link to='/reset'>Forgot your password?</Link>
            </p>
            <input
              name='password'
              type='password'
              placeholder='Type your password'
              required
            />
          </label>
          <Button
            color='white'
            bg='#7B4162'
            hv='#552340'
            style={{ marginTop: '40px' }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <div className='form-separator'></div>
          <p className='center'>
            Don't have an account yet? <Link to='/signup'>Create One!</Link>
          </p>
        </Form>
      </Container>
    </div>
  )
}

export default Login

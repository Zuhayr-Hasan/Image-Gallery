import React from 'react'
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
  input {
    diplay: block;
    marign-bottom: 20px;
    padding: 10px 15px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`

function Reset() {
  return (
    <div>
      <h1 className='authPageLogo'>Piczer</h1>
      <Container>
        <div>
          <h1>Forgot your password?</h1>
          <p className='less-important'>
            Please type your email below to receive a link to reset your
            password.
          </p>
          <div className='form-separator'></div>
          <Form>
            <input
              name='email'
              type='email'
              placeholder='Type your email'
              required
            />
            <Button
              color='white'
              bg='#7B4162'
              hv='#552340'
              style={{ marginTop: '30px' }}
            >
              Send Password Reset Email
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default Reset

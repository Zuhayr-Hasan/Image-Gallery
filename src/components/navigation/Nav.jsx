import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Header, Navigation } from './navStyles'

function Nav() {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return (
    <Container>
      <Header>
        <h1>Piczer</h1>
        <Navigation>
          <ul>
            <li style={{ cursor: 'pointer' }}>
              <button style={{ cursor: 'pointer' }} onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </Navigation>
      </Header>
    </Container>
  )
}

export default Nav

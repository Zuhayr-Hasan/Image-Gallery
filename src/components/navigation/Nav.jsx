import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from "../../utils/firebase";
import { signOut } from 'firebase/auth'
import { BiSolidPaintRoll } from "react-icons/bi";

import { Container, Header, Navigation } from './navStyles'

function Nav() {
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Header>
        <h1
          className="authPageLogo vertical-center"
          style={{ color: "#7B83EB", height: "10%" }}
        >
          <BiSolidPaintRoll
            style={{ marginRight: "15px", width: "30px", height: "30px" }}
          />
          Piczer
        </h1>
        <Navigation>
          <ul>
            <li style={{ cursor: "pointer" }}>
              <button style={{ cursor: "pointer" }} onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </Navigation>
      </Header>
    </Container>
  );
}

export default Nav

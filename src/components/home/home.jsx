import React from 'react'

import Container from './homeStyles'
import Nav from '../navigation/Nav'
import Header from '../header/header'
import Gallery from '../gallery/gallery'

function Home() {
  return (
    <Container>
      <Nav />
      <Header />
      <Gallery />
    </Container>
  )
}

export default Home

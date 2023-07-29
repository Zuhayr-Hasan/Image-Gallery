import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Reset from './authentication/reset'
import Signup from './authentication/signup'
import Login from './authentication/login'
import Home from './components/home/home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='reset' element={<Reset />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

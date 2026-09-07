import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBar from './components/HeaderBar'
import HomePage from './components/HomePage'

function App() {

  return (
    <Router>
      <HeaderBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App

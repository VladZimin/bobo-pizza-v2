import './scss/app.scss'

import React from 'react'

import Header from './components/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'


function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

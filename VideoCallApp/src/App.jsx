import { useState } from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import ZegoCloud from './ZegoCloud'
import VideoRoom from './VideoRoom'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ZegoCloud/>} />
        <Route path='/room/:id' element={<VideoRoom/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

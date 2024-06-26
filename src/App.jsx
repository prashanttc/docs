import React from 'react'
import Background from './components/background'
import Foreground from './components/foreground'

function App() {
  return (
    <div className='bg-zinc-800 w-full h-screen relative'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App

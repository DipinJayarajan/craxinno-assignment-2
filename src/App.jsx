import React from 'react'

import Content from './components/Content'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <Footer/>
    </div>
  )
}

export default App

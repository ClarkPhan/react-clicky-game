import React, { Component } from 'react'
import Nav from './components/Nav'
import Jumbotron from './components/Jumbotron'
import ImageGallery from './components/ImageGallery'

class App extends Component {
  render () {
    return (
      <div>
        <Nav></Nav>
        <Jumbotron/>
        <ImageGallery/>
        <ImageGallery/>
        <ImageGallery/>
      </div>
    )
  }
}

export default App

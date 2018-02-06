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
        <ImageGallery
          src1="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_13-256.png"
          src2="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_14-256.png"
          src3="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_4-256.png"
          src4="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_5-256.png"
          src5="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_2-256.png"
          src6="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_11-256.png"
          src7="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_9-256.png"
          src8="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_10-256.png"
          src9="https://cdn1.iconfinder.com/data/icons/photo-stickers-hats/128/hat_17-256.png"
        />
      </div>
    )
  }
}

export default App

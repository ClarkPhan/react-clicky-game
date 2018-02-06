import React, { Component } from 'react'
import ImageGallery from './components/ImageGallery'
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };
  
  render () {
    return (
      <div>
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
          images={this.state.images}
        />
      </div>
    )
  }
}

export default App

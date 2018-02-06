import Nav from '../Nav'
import Jumbotron from '../Jumbotron'
import React, { Component } from "react";

class imageGallery extends Component {
  // Initialize this.state.images as an empty array
  state = {
    images:
    [
      this.props.src1,
      this.props.src2,
      this.props.src3,
      this.props.src4,
      this.props.src5,
      this.props.src6,
      this.props.src7,
      this.props.src8,
      this.props.src9
    ],
    imageObj: this.props.images
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  componentDidMount() {
    this.shuffledImages();
    console.log(this.state.images);
  }

  shuffledImages() {
    var shuffledImages = this.shuffle(this.state.images);
    this.setState({images:shuffledImages});
  }

  handleClick = src => {
    console.log(src);
    let length = this.state.imageObj.length;
    this.state.imageObj.forEach(image => {
      if (image.src === src) {
        // incrementScore();
        console.log(true);
        // Filter this.state.imageObj for images with an src not equal to the src being removed
        let updatedImageObj = this.state.imageObj.filter(image => image.src !== src);
        this.setState({imageObj:updatedImageObj}, () => {
          console.log(this.state.imageObj)
        });
      }
    });
    // // Filter this.state.imageObj for images with an src not equal to the src being removed
    // let updatedImageObj = this.state.imageObj.filter(image => image.src !== src);
    // this.setState({imageObj:updatedImageObj}, () => {
    //   console.log(this.state.imageObj)
    // });

  }

  render() {
    return(
    <div>
    <Nav></Nav>
    <Jumbotron/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[0])}>
            <img src={this.state.images[0] ? this.state.images[0] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={this.handleClick}>
            <img src={this.state.images[1] ? this.state.images[1] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={this.handleClick}>
            <img src={this.state.images[2] ? this.state.images[2] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={this.handleClick}>
            <img src={this.state.images[3] ? this.state.images[3]: 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={this.handleClick}>
            <img src={this.state.images[4] ? this.state.images[4] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={this.handleClick}>
            <img src={this.state.images[5] ? this.state.images[5] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={this.handleClick}>
            <img src={this.state.images[6] ? this.state.images[6] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={this.handleClick}>
          <div className='thumbnail'>
            <img src={this.state.images[7] ? this.state.images[7] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={this.handleClick}> 
          <div className='thumbnail'>
            <img src={this.state.images[8] ? this.state.images[8] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default imageGallery

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
    imageObj: this.props.images,
    score: 0
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
    this.shuffleImages();
    console.log(this.state.images);
  }

  shuffleImages() {
    var shuffledImages = this.shuffle(this.state.images);
    this.setState({images:shuffledImages});
  }

  incrementScore() {
    let newScore = this.state.score + 25;
    this.setState({score: newScore});
    this.shuffleImages();
  }

  decrementScore() {
    let newScore = this.state.score - 7;
    this.setState({score: newScore});
    this.shuffleImages();
  }

  handleClick = src => {
    console.log(src);
    let imageObjCopy = this.state.imageObj;
    this.state.imageObj.forEach(image => {
      if (image.src === src) {
        console.log("found");
        if (!image.clicked) {
          this.incrementScore();
          let updatedObj = imageObjCopy[imageObjCopy.indexOf(image)].clicked = true;
          this.setState({imageObj: [updatedObj]});
          console.log(this.state.imageObj);
        } else if (image.clicked) {
          this.decrementScore();
          this.setState({imageObj: [imageObjCopy]});
        }
      }
    });
  }

  render() {
    return(
    <div>
    <Nav score={this.state.score}></Nav>
    <Jumbotron/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[0])}>
            <img src={this.state.images[0] ? this.state.images[0] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[1])}>
            <img src={this.state.images[1] ? this.state.images[1] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[2])}>
            <img src={this.state.images[2] ? this.state.images[2] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[3])}>
            <img src={this.state.images[3] ? this.state.images[3]: 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[4])}>
            <img src={this.state.images[4] ? this.state.images[4] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[5])}>
            <img src={this.state.images[5] ? this.state.images[5] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail' onClick={() => this.handleClick(this.state.images[6])}>
            <img src={this.state.images[6] ? this.state.images[6] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[7])}>
          <div className='thumbnail'>
            <img src={this.state.images[7] ? this.state.images[7] : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4' onClick={() => this.handleClick(this.state.images[8])}> 
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

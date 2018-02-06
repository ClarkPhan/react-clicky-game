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
    ]
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
    console.log(this.state.images);
    console.log(this.shuffle(this.state.images));
  }
  render() {
    return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src1 ? this.props.src1 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src2 ? this.props.src2 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src3 ? this.props.src3 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src4 ? this.props.src4 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src5 ? this.props.src5 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src6 ? this.props.src6 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.sr7 ? this.props.src7 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src8 ? this.props.src8 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src9 ? this.props.src9 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" className="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default imageGallery

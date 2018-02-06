import React, { Component } from "react";

class imageGallery extends Component { 
  render() {
    return(
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src1 ? this.props.src1 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src2 ? this.props.src2 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src3 ? this.props.src3 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src4 ? this.props.src4 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src5 ? this.props.src5 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src6 ? this.props.src6 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.sr7 ? this.props.src7 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src8 ? this.props.src8 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='thumbnail'>
            <img src={this.props.src9 ? this.props.src9 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'}  alt="" class="img-responsive" style={{width: '40%'}}></img>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default imageGallery

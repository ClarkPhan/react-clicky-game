import React from 'react';

const imageGallery = props => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-4'>
        <div className='thumbnail'>
          <img src={props.src1 ? props.src1 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} class="img-responsive" style={{width: '40%'}}></img>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='thumbnail'>
          <img src={props.src2 ? props.src2 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} class="img-responsive" style={{width: '40%'}}></img>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='thumbnail'>
          <img src={props.src3 ? props.src3 : 'https://cdn4.iconfinder.com/data/icons/longico/224/longico-23-512.png'} class="img-responsive" style={{width: '40%'}}></img>
        </div>
      </div>
    </div>
  </div>
)

export default imageGallery

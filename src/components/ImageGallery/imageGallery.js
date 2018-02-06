import React from 'react';

const imageGallery = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-4'>
        <div className='thumbnail'>
          <a href='http://via.placeholder.com/350x150' target='_blank'><img src='http://via.placeholder.com/350x150' alt='Lights' style={{width: '100%'}}></img>
          </a>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='thumbnail'>
          <a href='http://via.placeholder.com/350x150' target='_blank'><img src='http://via.placeholder.com/350x150' alt='Nature' style={{width: '100%'}}></img>
          </a>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='thumbnail'>
          <a href='http://via.placeholder.com/350x150' target='_blank'><img src='http://via.placeholder.com/350x150' alt='Fjords' style={{width: '100%'}}></img>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default imageGallery

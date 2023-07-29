import React from 'react'

import {
  Wrapper,
  Container,
  Image,
  imgVariant,
  containerVariant,
} from './galleryStyles'

function Gallery() {
  return (
    <React.Fragment>
      <Container initial='hidden' variants={containerVariant}>
        <Wrapper id='wrapper'>
          <div style={{ display: 'block' }}>
            <Image variants={imgVariant}>
              <img
                className='lazyload'
                src='https://free4kwallpapers.com/uploads/originals/2023/03/04/our-little-beautiful-home-wallpaper.jpg'
              />
            </Image>
          </div>

          <div id='overlay'>
            <button className='delete-item'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-trash-2'
              >
                <polyline points='3 6 5 6 21 6'></polyline>
                <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                <line x1='10' y1='11' x2='10' y2='17'></line>
                <line x1='14' y1='11' x2='14' y2='17'></line>
              </svg>
            </button>
          </div>
        </Wrapper>
      </Container>
    </React.Fragment>
  )
}

export default Gallery

import React from 'react'

import { Upload, Container, Heading } from './headerStyles'

function Header() {
  return (
    <Container>
      <Heading>Explore and Share your imaginations</Heading>
      <Upload>
        <label>
          <input type='file' />
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='46'
              height='46'
              viewBox='0 0 46 46'
            >
              <g
                id='Group_1'
                data-name='Group 1'
                transform='translate(-359 -237)'
              >
                <circle
                  id='Ellipse_1'
                  data-name='Ellipse 1'
                  cx='23'
                  cy='23'
                  r='23'
                  transform='translate(359 237)'
                  fill='#505665'
                />
                <g id='plus' transform='translate(368 246)'>
                  <line
                    id='Line_1'
                    data-name='Line 1'
                    y2='19'
                    transform='translate(15 5)'
                    fill='none'
                    stroke='#fff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                  />
                  <line
                    id='Line_2'
                    data-name='Line 2'
                    x2='19'
                    transform='translate(5 15)'
                    fill='none'
                    stroke='#fff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                  />
                </g>
              </g>
            </svg>
          </div>
        </label>
      </Upload>
    </Container>
  )
}

export default Header

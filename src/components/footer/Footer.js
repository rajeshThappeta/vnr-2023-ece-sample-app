import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='d-flex justify-content-between  px-4 py-3 align-items-center '>
      <div className="address">
        <p className='lead'>Hyderabad</p>
        <p className='lead'>Miyapur</p>
        <p className='lead'>9393939393</p>
      </div>
      <div className="contact ">
        <p className="lead">test@mail.com</p>
        <p className="lead fw-bold">www.example.com</p>
      </div>
    </footer>
  )
}

export default Footer
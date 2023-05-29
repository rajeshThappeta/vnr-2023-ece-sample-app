import React from 'react'

function Footer() {
  return (
    <div className='d-flex justify-content-evenly bg-warning p-5 text-white'>
      <div className="address">
        <h3>Hyderabad</h3>
        <h3>Miyapur</h3>
        <h4>9393939393</h4>
      </div>
      <div className="contact">
        <p className="lead">test@mail.com</p>
        <p className="lead fw-bold">www.example.com</p>
      </div>
    </div>
  )
}

export default Footer
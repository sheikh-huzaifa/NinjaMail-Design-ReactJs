import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../../Assects/img/photo-1.png"
import img2 from "../../../Assects/img/photo.png"

const section2 = props => {
  return (
    <div className="container pt-5 sec_3 mb-5">
    <div className="row ">
      <div className="col-6 col-md-4 col-lg-3 offset-lg-1 ">
        <div className="card" >
          <img src={img1} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</p>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-6 offset-5 col-md-4 col-lg-3 offset-md-0 pt-3 pt-md-5 ">
        <div className="card ms-lg-5 mt-md-5" >
          <img src={img2} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</p>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-9 col-md-3 col-lg-4 ms-md-5 pt-5  offset-2">
        <h1 className="pt-5">The source for
          proven, engaging 
          email campaigns</h1>
          <p>Whether you’re a startup, small
            business, e-commerce store, or 
            want to promote your app, NinjaMail
            has the feature set tailored for
            your business. 
            </p>
      </div>
    </div>
  </div>
  )
}

section2.propTypes = {}

export default section2
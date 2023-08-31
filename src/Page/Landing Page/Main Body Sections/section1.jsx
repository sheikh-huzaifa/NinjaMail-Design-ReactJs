import React from 'react'
import PropTypes from 'prop-types'
import image from "../../../Assects/img/VIDEO (image).png"

const section1 = props => {
  return (
    <div className="container sec_2 d-flex align-items-center justify-content-center position-relative mt-5 pt-5 mb-5">
          <img src={image} alt="" className="img-fluid mt-5 position-relative"  />
            <div > 
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                    <h1 >Reach More Customers</h1>
                    <button className="mt-md-5 mt-2 button_bg_white">Learn More</button>
                </div>
            </div>
            
        </div>
  )
}

section1.propTypes = {}

export default section1
import React from 'react'
import PropTypes from 'prop-types'
import img from "../../../Assects/img/Logos.png"

const section4 = props => {
  return (
    <div className="row text-center d-md-flex align-content-center">
          <div className="text-center pb-5">
            <h1 className=" ps-4 text-break pb-5">All the best brands <br/>
              already use us.</h1>
            <img src={img} alt="" className="img-fluid px-5"/>  
          </div>

        </div>
  )
}

section4.propTypes = {}

export default section4
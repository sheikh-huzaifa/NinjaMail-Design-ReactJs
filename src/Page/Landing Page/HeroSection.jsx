import React from 'react'
import PropTypes from 'prop-types'
import image from  "../../Assects/img/photo-1544717302-de2939b7ef71 (image).png"

const HeroSection = props => {
  return (
    <div className="container">
            <div className="d-flex d-md-block row-md  header mx-lg-5 px-lg-5 px-md-3  mt-5  ">
                <div className="col-md-6 mt-lg-5 mt-md-3">
                    <h1 className=" ps-lg-3 text-break">Create Stunning 
                        Email Campaigns</h1>
                    <img src={image} alt="" className="img-fluid"/>    
                    <p className="ps-lg-3 pt-lg-4 pt-md-2 text-break">
                        Create and launch email campaigns that captivate
                        your customers in just a few clicks.
                    </p>
                    <button className="ms-lg-3 mt-lg-4 mt-md-2 button_bg_green " >TRY NOW</button>
                    <button className="ms-md-5 mt-lg-4 mt-md-2 button_bg_white">GET A DEMO</button>
                </div>
                
            </div>
        </div>
  )
}

HeroSection.propTypes = {}

export default HeroSection
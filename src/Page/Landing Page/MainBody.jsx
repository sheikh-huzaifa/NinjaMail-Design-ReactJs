import React from 'react'
import PropTypes from 'prop-types'
import Section1 from './Main Body Sections/section1'
import Section2 from './Main Body Sections/section2'
import Section3 from './Main Body Sections/section3'
import Section4 from './Main Body Sections/section4'
import Section5 from './Main Body Sections/section5'

const MainBody = props => {
  return (
    <div class="second gx-0 pt-5">
      <div class="container-fluid ">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />

        </div>
        </div>
  )
}

MainBody.propTypes = {}

export default MainBody
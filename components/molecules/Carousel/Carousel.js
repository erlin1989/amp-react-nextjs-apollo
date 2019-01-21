import React from 'react'
import { AmpCarousel } from 'react-amphtml'
import PropTypes from 'prop-types'

export function Carousel({ children, width, height, layout }) {
  return (
    <AmpCarousel
      layout={layout}
      height={height}
      width={width}
      type="slides"
      loop=""
    >
      {children}
    </AmpCarousel>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  layout: PropTypes.string,
}

Carousel.defaultProps = {
  layout: 'responsive',
}

export default Carousel

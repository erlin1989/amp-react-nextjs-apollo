import React from 'react'
import PropTypes from 'prop-types'

export function Image({ src, alt, width, height, layout }) {
  return (
    <amp-img
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  layout: PropTypes.string,
}

Image.defaultProps = {
  alt: '',
  layout: 'responsive',
}

export default Image

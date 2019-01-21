import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledTypography = styled.div`
  font-size: ${({ theme: { typography }, tag, themeSize }) =>
    typography.sizes[themeSize] ||
    typography.sizes[tag] ||
    typography.sizes.default}px;
  line-height: ${({ theme: { typography }, tag }) =>
    (typography.sizes[tag] || typography.sizes.default) * 1.3}px;
  font-weight: ${({ theme: { typography }, tag }) =>
    typography.weights[tag] || typography.weights.default};
  color: ${({ theme: { typography }, tag, themeColor }) =>
    typography.color[themeColor] ||
    typography.color[tag] ||
    typography.color.default};
  margin: 0;
  text-align: ${({ textAlign }) => textAlign};
  font-family: ${({ tag, theme: { typography } }) =>
    typography.font[tag] || typography.font.default};
`

export function Typography({
  tag,
  children,
  textAlign,
  themeSize,
  themeColor,
  ...rest
}) {
  return (
    <StyledTypography
      as={tag}
      tag={tag}
      textAlign={textAlign}
      themeSize={themeSize}
      themeColor={themeColor}
      {...rest}
    >
      {children}
    </StyledTypography>
  )
}

Typography.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  themeColor: PropTypes.string,
  themeSize: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'inherit']),
}

Typography.defaultProps = {
  tag: 'div',
  textAlign: 'inherit',
}

export default Typography

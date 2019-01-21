import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledLogo = styled.div`
  display: inline-block;
  color: ${({ theme, themeColor }) => theme.palette[themeColor].main};
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
`

export const StyledWell = styled.span`
  opacity: 0.5;
`

export function Logo({ themeColor }) {
  return (
    <StyledLogo themeColor={themeColor}>
      book<StyledWell>well</StyledWell>
    </StyledLogo>
  )
}

Logo.propTypes = {
  themeColor: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

Logo.defaultProps = {
  themeColor: 'primary',
}

export default Logo

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const StyledBadge = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 4px 40px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
`

export function Badge({ children, ...props }) {
  return <StyledBadge {...props}>{children}</StyledBadge>
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Badge

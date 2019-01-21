import React from 'react'
import PriceIcon from 'components/atoms/Icon/PriceTag'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import numeral from 'numeral'

export const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.palette.quinary.light};
  min-width: 65px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`

export const StyledIcon = styled(PriceIcon)`
  margin: ${({ theme }) => theme.spacing.sm}px;
`

export function Price({ value }) {
  return (
    <StyledPrice>
      <StyledIcon /> {value <= 0 ? 'Free' : numeral(value).format('$0')}
    </StyledPrice>
  )
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Price

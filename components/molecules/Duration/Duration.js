import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TimerIcon from 'components/atoms/Icon/Timer'

export const StyledDuration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.palette.quinary.light};
  min-width: 65px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`

export const StyledIcon = styled(TimerIcon)`
  margin: ${({ theme }) => theme.spacing.sm}px;
`

export function Duration({ duration }) {
  return (
    <StyledDuration>
      <StyledIcon /> {duration}m
    </StyledDuration>
  )
}

Duration.propTypes = {
  duration: PropTypes.number.isRequired,
}

export default Duration

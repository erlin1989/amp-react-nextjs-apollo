import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from 'components/atoms/Typography'
import { convertMinutesToTime, convertDayOfWeekToLabel } from 'lib/time'

export const StyledOpeningHour = styled.div`
  padding: ${({ theme }) => theme.spacing.sm}px 0;
`

export const StyledTypography = styled(Typography)`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 0 ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  justify-content: space-between;
`

export const Day = styled.div``
export const Time = styled.div``
export const StartTime = styled.span``
export const EndTime = styled.span``

export function OpeningHour({ startMinute, endMinute, dayOfWeek }) {
  return (
    <StyledOpeningHour>
      <StyledTypography tag="h3">
        <Day>{convertDayOfWeekToLabel(dayOfWeek)}</Day>
        <Time>
          <StartTime>{convertMinutesToTime(startMinute)}</StartTime> -
          <EndTime>{convertMinutesToTime(endMinute)}</EndTime>
        </Time>
      </StyledTypography>
    </StyledOpeningHour>
  )
}

OpeningHour.propTypes = {
  startMinute: PropTypes.number.isRequired,
  endMinute: PropTypes.number.isRequired,
  dayOfWeek: PropTypes.number.isRequired,
}

export default OpeningHour

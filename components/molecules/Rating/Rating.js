import React from 'react'
import Typography from 'components/atoms/Typography'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StarIcon from 'components/atoms/Icon/Star'
import numeral from 'numeral'

export const StyledRating = styled.div`
  display: inline-grid;
  align-items: center;
  justify-items: start;
  justify-content: start;
  grid-template-columns: auto auto;
  grid-gap: 0 ${({ theme }) => theme.spacing.md}px;
  white-space: nowrap;
`

export const StyledReviewsText = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 0 ${({ theme }) => theme.spacing.xs}px;
  margin-left: -3px;

  svg {
    margin-top: -2px;
  }
`

export const StyledText = styled.div``

export const StyledRatingNumber = styled(Typography)`
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${({ theme, themeColor }) =>
    theme.palette[themeColor].main};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.xxl}px;
`
export const AverageRatingText = styled(Typography)``

export const NumReviews = styled.span``

export function Rating({ rating, numReviews, themeColor }) {
  return (
    <StyledRating>
      <StyledRatingNumber tag="h2" themeColor={themeColor}>
        {Math.max(numeral(rating).format('0.0'), 0)}
      </StyledRatingNumber>
      {numReviews && (
        <StyledText>
          <AverageRatingText tag="h4">average rating</AverageRatingText>
          <StyledReviewsText tag="h6">
            <StarIcon />
            <span>
              <NumReviews>{numReviews}</NumReviews> reviews
            </span>
          </StyledReviewsText>
        </StyledText>
      )}
    </StyledRating>
  )
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number,
  themeColor: PropTypes.string,
}

Rating.defaultProps = {
  themeColor: 'primary',
}

export default Rating

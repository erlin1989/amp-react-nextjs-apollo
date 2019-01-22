import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'components/molecules/Rating'
import Typography from 'components/atoms/Typography'
import styled from 'styled-components'
import nl2br from 'react-nl2br'
import { format } from 'date-fns'

export const StyledReview = styled.article`
  color: ${({ theme }) => theme.palette.secondary.main};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 ${({ theme }) => theme.spacing.md}px;
  justify-content: start;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.quinary.xlight};
  padding: ${({ theme }) => theme.spacing.md}px;
`

export const StyledContent = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
`

export const StyledReviewText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`

export const StyledAuthor = styled(Typography)``

export const StyledDate = styled(Typography)``

export function Review({ rating, author, review, date }) {
  return (
    <StyledReview>
      <Rating rating={rating} themeColor="secondary" />
      <StyledContent>
        <StyledAuthor tag="h4">{author}</StyledAuthor>
        <StyledDate tag="h6" themeSize="xs">
          visited {format(date, 'MMMM YYYY')}
        </StyledDate>
        <StyledReviewText themeSize="sm">{nl2br(review)}</StyledReviewText>
      </StyledContent>
    </StyledReview>
  )
}

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  review: PropTypes.string,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Review

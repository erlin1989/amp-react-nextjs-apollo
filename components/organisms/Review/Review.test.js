import React from 'react'
import { shallow } from 'enzyme'
import {
  Review,
  StyledReview,
  StyledAuthor,
  StyledDate,
  StyledReviewText,
} from './Review'
import Rating from 'components/molecules/Rating'

describe('Review', () => {
  const author = 'Test author'
  const rating = 5
  const review = 'Test review'
  const date = '2018-02-20T20:53:45.160Z'

  it('renders without crashing', () => {
    shallow(
      <Review rating={rating} review={review} author={author} date={date} />
    )
  })

  it('renders a "StyledReview"', () => {
    const element = shallow(
      <Review rating={rating} review={review} author={author} date={date} />
    )
    expect(element.find(StyledReview)).toHaveLength(1)
  })

  it('passes the "rating" prop to "Rating" component', () => {
    const element = shallow(
      <Review rating={rating} review={review} author={author} date={date} />
    )
    const expected = rating
    const actual = element.find(Rating).props().rating

    expect(actual).toBe(expected)
  })

  it('renders the "author" prop', () => {
    const element = shallow(
      <Review rating={rating} review={review} author={author} date={date} />
    )
    const expected = author
    const actual = element.find(StyledAuthor).props().children

    expect(actual).toBe(expected)
  })

  it('renders the formatted "date" prop', () => {
    const element = shallow(
      <Review rating={rating} review={review} author={author} date={date} />
    )
    const expected = 'February 2018'
    const actual = element.find(StyledDate).props().children

    expect(actual).toContain(expected)
  })

  it('renders the "review" prop', () => {
    const element = shallow(
      <Review rating={rating} review={review} author={author} date={date} />
    )
    const expected = review
    const actual = element.find(StyledReviewText).props().children

    expect(actual).toContain(expected)
  })
})

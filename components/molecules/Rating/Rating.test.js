import React from 'react'
import { shallow } from 'enzyme'
import StarIcon from 'components/atoms/Icon/Star'
import {
  Rating,
  StyledRatingNumber,
  StyledRating,
  StyledText,
  NumReviews,
  AverageRatingText,
} from './Rating'

describe('Rating', () => {
  it('renders without crashing', () => {
    shallow(<Rating rating={3} />)
  })

  it('renders a "StyledRating" component', () => {
    const element = shallow(<Rating rating={5} />)
    expect(element.find(StyledRating)).toHaveLength(1)
  })

  it('renders a rating and rounds up (1dp)', () => {
    const expected = 4.9
    const element = shallow(<Rating rating={4.87654} />)
    const actual = element.find(StyledRatingNumber).props().children

    expect(actual).toBe(expected)
  })

  it('passes the "themeColor" prop to "StyledRatingNumber"', () => {
    const themeColor = 'secondary'
    const element = shallow(<Rating rating={4} themeColor={themeColor} />)
    const expected = themeColor
    const actual = element.find(StyledRatingNumber).props().themeColor

    expect(actual).toBe(expected)
  })
})

describe('if "numReviews" is specified', () => {
  const numReviews = 55

  it('renders a "StarIcon" if "numReviews" prop is present', () => {
    const element = shallow(<Rating rating={4} numReviews={numReviews} />)
    const actual = element.find(StarIcon)

    expect(actual).toHaveLength(1)
  })

  it('renders a string "average rating" if "numReviews" prop is present', () => {
    const element = shallow(<Rating rating={4} numReviews={numReviews} />)
    const expected = 'average rating'
    const actual = element.find(AverageRatingText).props().children

    expect(actual).toBe(expected)
  })

  it('renders a "StyledText" component if "numReviews" prop is present', () => {
    const element = shallow(<Rating rating={4} numReviews={numReviews} />)
    const expected = StyledText
    const actual = element.find(expected)

    expect(actual).toHaveLength(1)
  })

  it('renders the number of reviews if "numReviews" prop is present', () => {
    const element = shallow(<Rating rating={4} numReviews={numReviews} />)
    const expected = numReviews
    const actual = element.find(NumReviews).props().children

    expect(actual).toBe(expected)
  })
})

describe('if "numReviews" is not specified', () => {
  it('does not render a "StarIcon" if "numReviews" prop is not present', () => {
    const element = shallow(<Rating rating={4} />)
    const actual = element.find(StarIcon)

    expect(actual).toHaveLength(0)
  })

  it('does not render a string "average rating" if "numReviews" prop is not present', () => {
    const element = shallow(<Rating rating={4} />)
    const actual = element.find(AverageRatingText)

    expect(actual).toHaveLength(0)
  })

  it('does not render a "StyledText" component if "numReviews" is not present', () => {
    const element = shallow(<Rating rating={4} />)
    const expected = StyledText
    const actual = element.find(expected)

    expect(actual).toHaveLength(0)
  })
})

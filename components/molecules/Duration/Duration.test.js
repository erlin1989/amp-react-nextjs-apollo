import React from 'react'
import { shallow } from 'enzyme'
import { Duration, StyledDuration, StyledIcon } from './Duration'

describe('Duration', () => {
  it('renders without crashing', () => {
    shallow(<Duration duration={50} />)
  })

  it('renders a "StyledDuration" element', () => {
    const element = shallow(<Duration duration={50} />)
    expect(element.find(StyledDuration)).toHaveLength(1)
  })

  it('renders the "duration" prop as a "StyledDuration" child', () => {
    const duration = 50
    const element = shallow(<Duration duration={duration} />)
    const expected = duration
    const actual = element.find(StyledDuration).props().children

    expect(actual).toContain(expected)
  })

  it('renders a "StyledIcon" as a "StyledDuration" child', () => {
    const element = shallow(<Duration duration={50} />)
    const expected = StyledIcon
    const actual = element.find(StyledDuration).find(expected)

    expect(actual).toHaveLength(1)
  })
})

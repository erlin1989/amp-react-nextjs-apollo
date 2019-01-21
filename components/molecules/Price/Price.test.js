import React from 'react'
import { shallow } from 'enzyme'
import { Price, StyledPrice, StyledIcon } from './Price'

describe('Price', () => {
  it('renders without crashing', () => {
    shallow(<Price value={50} />)
  })

  it('renders a "StyledPrice" component', () => {
    const element = shallow(<Price value={50} />)
    expect(element.find(StyledPrice)).toHaveLength(1)
  })

  it('renders a "StyledIcon" component', () => {
    const element = shallow(<Price value={50} />)
    expect(element.find(StyledIcon)).toHaveLength(1)
  })

  it('renders "Free" as a child if the "value" prop is 0', () => {
    const expected = 'Free'
    const element = shallow(<Price value={0} />)
    const actual = element.find(StyledPrice).props().children

    expect(actual).toContain(expected)
  })

  it('renders "Free" as a child if the "value" prop is negative', () => {
    const expected = 'Free'
    const element = shallow(<Price value={-1} />)
    const actual = element.find(StyledPrice).props().children

    expect(actual).toContain(expected)
  })

  it('renders a formatted price as a child if the "value" prop is > 0', () => {
    const expected = '$50'
    const element = shallow(<Price value={50} />)
    const actual = element.find(StyledPrice).props().children

    expect(actual).toContain(expected)
  })
})

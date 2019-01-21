import React from 'react'
import { shallow } from 'enzyme'
import { Logo, StyledLogo, StyledWell } from './Logo'

describe('Logo', () => {
  beforeEach(() => {})

  it('renders without crashing', () => {
    shallow(<Logo />)
  })

  it('renders a "StyledLogo"', () => {
    const element = shallow(<Logo />)
    expect(element.find(StyledLogo)).toHaveLength(1)
  })

  it('renders a "StyledWell"', () => {
    const element = shallow(<Logo />)
    expect(element.find(StyledWell)).toHaveLength(1)
  })

  it('passes the "themeColor" prop to "StyledLogo"', () => {
    const themeColor = 'primary'
    const element = shallow(<Logo themeColor={themeColor} />)
    const expected = themeColor
    const actual = element.find(StyledLogo).props().themeColor

    expect(actual).toBe(expected)
  })
})

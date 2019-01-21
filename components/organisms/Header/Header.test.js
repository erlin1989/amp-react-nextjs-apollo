import React from 'react'
import { shallow } from 'enzyme'
import { Header, StyledHeader } from './Header'
import Logo from 'components/atoms/Logo'

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />)
  })

  it('renders a "StyledHeader"', () => {
    const element = shallow(<Header />)
    expect(element.find(StyledHeader)).toHaveLength(1)
  })

  it('renders a "a" tag', () => {
    const element = shallow(<Header />)
    expect(element.find('a')).toHaveLength(1)
  })

  it('renders a "Logo" in the "a" tag', () => {
    const element = shallow(<Header />)
    expect(element.find('a').find(Logo)).toHaveLength(1)
  })
})

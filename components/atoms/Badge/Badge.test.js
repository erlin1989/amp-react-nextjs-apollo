import React from 'react'
import { shallow } from 'enzyme'
import { Badge, StyledBadge } from './Badge'

describe('Badge', () => {
  beforeEach(() => {})

  it('renders without crashing', () => {
    shallow(<Badge>Test</Badge>)
  })

  it('renders a "StyledBadge"', () => {
    const element = shallow(<Badge>Test</Badge>)
    expect(element.find(StyledBadge)).toHaveLength(1)
  })

  it('passes the "children" prop to "StyledBadge"', () => {
    const childrenProp = 'Test'
    const element = shallow(<Badge>{childrenProp}</Badge>)

    const expected = childrenProp
    const actual = element.find(StyledBadge).props().children

    expect(expected).toBe(actual)
  })
})

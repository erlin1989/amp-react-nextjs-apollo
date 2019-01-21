import React from 'react'
import { shallow } from 'enzyme'
import { Button, StyledButton } from './Button'

describe('Button', () => {
  beforeEach(() => {})

  it('renders without crashing', () => {
    shallow(<Button />)
  })

  it('renders a "StyledButton"', () => {
    const element = shallow(<Button />)
    expect(element.find(StyledButton)).toHaveLength(1)
  })

  it('passes the "children" prop to "StyledButton"', () => {
    const childrenProp = 'Test'
    const element = shallow(<Button>{childrenProp}</Button>)
    const expected = childrenProp
    const actual = element.find(StyledButton).props().children

    expect(actual).toContain(expected)
  })

  it('passes the "href" prop to "StyledButton"', () => {
    const href = 'test'
    const element = shallow(<Button href={href} />)
    const expected = href
    const actual = element.find(StyledButton).props().href

    expect(actual).toBe(expected)
  })

  it('passes the "isDisabled" prop to "StyledButton"', () => {
    const isDisabled = true
    const element = shallow(<Button isDisabled={isDisabled} />)
    const expected = isDisabled
    const actual = element.find(StyledButton).props().isDisabled

    expect(actual).toBe(expected)
  })

  it('passes the "themeColor" prop to "StyledButton"', () => {
    const themeColor = 'primary'
    const element = shallow(<Button themeColor={themeColor} />)
    const expected = themeColor
    const actual = element.find(StyledButton).props().themeColor

    expect(actual).toBe(expected)
  })
})

describe('"on" prop is not specified', () => {
  it('does not render a "div" when there is no "on" prop', () => {
    const element = shallow(<Button />)
    const expected = 'div'
    const actual = element.find(expected)

    expect(actual).toHaveLength(0)
  })
})

describe('"on" prop is specified', () => {
  it('renders a "div" when "isDisabled=false" and there is an "on" prop', () => {
    const onProp = 'test'
    const isDisabled = false
    const element = shallow(<Button on={onProp} isDisabled={isDisabled} />)
    const expected = 'div'
    const actual = element.find(expected)

    expect(actual).toHaveLength(1)
  })

  it('does not render a "div" when "isDisabled=true" and there is an "on" prop', () => {
    const onProp = 'test'
    const isDisabled = true
    const element = shallow(<Button on={onProp} isDisabled={isDisabled} />)
    const expected = 'div'
    const actual = element.find(expected)

    expect(actual).toHaveLength(0)
  })
})

describe('"isDisabled" prop is specified', () => {
  it('does not render a "div" when "isDisabled=true"', () => {
    const isDisabled = true
    const element = shallow(<Button isDisabled={isDisabled} />)
    const expected = 'div'
    const actual = element.find(expected)

    expect(actual).toHaveLength(0)
  })
})

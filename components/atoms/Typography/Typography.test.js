import React from 'react'
import { shallow } from 'enzyme'
import { Typography, StyledTypography } from './Typography'

describe('Typography', () => {
  it('renders without crashing', () => {
    shallow(<Typography />)
  })

  it('renders a "StyledTypography" element', () => {
    const element = shallow(<Typography />)
    expect(element.find(StyledTypography)).toHaveLength(1)
  })

  it('passes the "themeColor" prop to "StyledTypography"', () => {
    const themeColor = 'primary'
    const element = shallow(<Typography themeColor={themeColor} />)
    const expected = themeColor
    const actual = element.find(StyledTypography).props().themeColor

    expect(actual).toBe(expected)
  })

  it('passes the "themeSize" prop to "StyledTypography"', () => {
    const themeSize = 'sm'
    const element = shallow(<Typography themeSize={themeSize} />)
    const expected = themeSize
    const actual = element.find(StyledTypography).props().themeSize

    expect(actual).toBe(expected)
  })

  it('passes the "textAlign" prop to "StyledTypography"', () => {
    const textAlign = 'left'
    const element = shallow(<Typography textAlign={textAlign} />)
    const expected = textAlign
    const actual = element.find(StyledTypography).props().textAlign

    expect(actual).toBe(expected)
  })

  it('passes the "tag" prop to "StyledTypography" "tag" prop', () => {
    const tag = 'h1'
    const element = shallow(<Typography tag={tag} />)
    const expected = tag
    const actual = element.find(StyledTypography).props().tag

    expect(actual).toBe(expected)
  })

  it('passes the "tag" prop to "StyledTypography" "as" prop', () => {
    const tag = 'h1'
    const element = shallow(<Typography tag={tag} />)
    const expected = tag
    const actual = element.find(StyledTypography).props().as

    expect(actual).toBe(expected)
  })

  it('passes the "children" prop to "StyledTypography"', () => {
    const children = 'test text'
    const element = shallow(<Typography>{children}</Typography>)
    const expected = children
    const actual = element.find(StyledTypography).props().children

    expect(actual).toBe(expected)
  })
})

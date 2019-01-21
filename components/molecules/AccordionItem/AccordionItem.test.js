import React from 'react'
import { shallow } from 'enzyme'
import {
  AccordionItem,
  StyledHeader,
  StyledContent,
  HeaderContent,
  StyledIcon,
} from './AccordionItem'

describe('AccordionItem', () => {
  it('renders without crashing', () => {
    shallow(<AccordionItem header="Test header">Test</AccordionItem>)
  })

  it('renders a "StyledHeader" component', () => {
    const element = shallow(
      <AccordionItem header="Test header">Test</AccordionItem>
    )
    expect(element.find(StyledHeader)).toHaveLength(1)
  })

  it('renders a "StyledContent" component', () => {
    const element = shallow(
      <AccordionItem header="Test header">Test</AccordionItem>
    )
    expect(element.find(StyledContent)).toHaveLength(1)
  })

  it('renders a "children" prop as a StyledContent child', () => {
    const children = 'test'
    const element = shallow(
      <AccordionItem header="Test header">{children}</AccordionItem>
    )
    const expected = children
    const actual = element.find(StyledContent).props().children

    expect(actual).toBe(expected)
  })

  it('renders a "header" prop as a HeaderContent child', () => {
    const header = 'test header'
    const element = shallow(<AccordionItem header={header}>Test</AccordionItem>)
    const expected = header
    const actual = element.find(HeaderContent).props().children

    expect(actual).toBe(expected)
  })

  it('renders a "HeaderContent" as a "StyledHeader" child', () => {
    const element = shallow(<AccordionItem header="test">Test</AccordionItem>)
    const expected = HeaderContent
    const actual = element.find(StyledHeader).find(expected)

    expect(actual).toHaveLength(1)
  })

  it('renders a "StyledIcon" as a "StyledHeader" child', () => {
    const element = shallow(<AccordionItem header="test">Test</AccordionItem>)
    const expected = StyledIcon
    const actual = element.find(StyledHeader).find(expected)

    expect(actual).toHaveLength(1)
  })
})

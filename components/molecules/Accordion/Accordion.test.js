import React from 'react'
import { shallow } from 'enzyme'
import { Accordion } from './Accordion'
import { AmpAccordion } from 'react-amphtml'

describe('Accordion', () => {
  it('renders without crashing', () => {
    shallow(<Accordion>Test</Accordion>)
  })

  it('renders an "AmpAccordion" element', () => {
    const element = shallow(<Accordion>Test</Accordion>)
    expect(element.find(AmpAccordion)).toHaveLength(1)
  })

  it('passes the children prop as a "AmpAccordion" child', () => {
    const children = 'test'
    const element = shallow(<Accordion>{children}</Accordion>)
    const expected = children
    const actual = element.find(AmpAccordion).props().children

    expect(actual).toBe(expected)
  })
})

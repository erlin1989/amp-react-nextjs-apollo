import React from 'react'
import { shallow } from 'enzyme'
import { Carousel } from './Carousel'
import { AmpCarousel } from 'react-amphtml'

describe('Carousel', () => {
  it('renders without crashing', () => {
    shallow(<Carousel>Test</Carousel>)
  })

  it('renders an "AmpCarousel" component', () => {
    const element = shallow(<Carousel>Test</Carousel>)
    expect(element.find(AmpCarousel)).toHaveLength(1)
  })

  it('passes the "children" prop as a "AmpCarousel" child', () => {
    const children = 'test'
    const element = shallow(<Carousel>{children}</Carousel>)
    const expected = children
    const actual = element.find(AmpCarousel).props().children

    expect(actual).toBe(expected)
  })

  it('passes the "width" prop to "AmpCarousel"', () => {
    const widthProp = '50'
    const element = shallow(<Carousel width={widthProp}>Test</Carousel>)
    const expected = widthProp
    const actual = element.find(AmpCarousel).props().width

    expect(actual).toBe(expected)
  })

  it('passes the "height" prop to "AmpCarousel"', () => {
    const heightProp = '50'
    const element = shallow(<Carousel height={heightProp}>Test</Carousel>)
    const expected = heightProp
    const actual = element.find(AmpCarousel).props().height

    expect(actual).toBe(expected)
  })

  it('passes the "layout" prop to "AmpCarousel"', () => {
    const layoutProp = '50'
    const element = shallow(<Carousel layout={layoutProp}>Test</Carousel>)
    const expected = layoutProp
    const actual = element.find(AmpCarousel).props().layout

    expect(actual).toBe(expected)
  })
})

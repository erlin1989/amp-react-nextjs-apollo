import React from 'react'
import { shallow } from 'enzyme'
import { Lightbox, StyledOverlay, StyledBox, StyledContent } from './Lightbox'
import CloseIcon from 'components/atoms/Icon/Close'
import { AmpLightbox } from 'react-amphtml'

describe('Lightbox', () => {
  it('renders without crashing', () => {
    shallow(<Lightbox id="test">Test content</Lightbox>)
  })

  it('renders an "AmpLightbox" component', () => {
    const element = shallow(<Lightbox id="test">Test content</Lightbox>)
    expect(element.find(AmpLightbox)).toHaveLength(1)
  })

  it('passes an "id" prop to "AmpLightbox"', () => {
    const idProp = '50'
    const element = shallow(<Lightbox id={idProp}>Test content</Lightbox>)
    const expected = idProp
    const actual = element.find(AmpLightbox).props().id

    expect(actual).toBe(expected)
  })

  it('renders the "children" prop as a "StyledContent" child', () => {
    const children = 'Test child'
    const element = shallow(<Lightbox id="test-id">{children}</Lightbox>)
    const expected = children
    const actual = element.find(StyledContent).props().children

    expect(actual).toBe(expected)
  })

  it('renders a "StyledOverlay"', () => {
    const element = shallow(<Lightbox id="test-id">Test content</Lightbox>)
    expect(element.find(StyledOverlay)).toHaveLength(1)
  })

  it('renders a "StyledBox"', () => {
    const element = shallow(<Lightbox id="test-id">Test content</Lightbox>)
    expect(element.find(StyledBox)).toHaveLength(1)
  })

  it('renders a "StyledContent"', () => {
    const element = shallow(<Lightbox id="test-id">Test content</Lightbox>)
    expect(element.find(StyledContent)).toHaveLength(1)
  })

  it('renders a "CloseIcon"', () => {
    const element = shallow(<Lightbox id="test-id">Test content</Lightbox>)
    expect(element.find(CloseIcon)).toHaveLength(1)
  })

  it('renders a close button', () => {
    const element = shallow(<Lightbox id="test-id">Test content</Lightbox>)

    expect(element.find('button')).toHaveLength(1)
  })
})

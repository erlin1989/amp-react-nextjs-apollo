import React from 'react'
import { shallow } from 'enzyme'
import { Image } from './Image'

describe('Image', () => {
  it('renders without crashing', () => {
    shallow(<Image src="https://placehold.it/30x30" width="30" height="30" />)
  })

  it('renders an "amp-img" element', () => {
    const expected = 'amp-img'
    const element = shallow(
      <Image src="https://placehold.it/30x30" width="30" height="30" />
    )
    const actual = element.find(expected)

    expect(actual).toHaveLength(1)
  })

  it('passes the "src" prop to "amp-img"', () => {
    const srcProp = 'Test'
    const element = shallow(<Image src={srcProp} width="30" height="30" />)
    const expected = srcProp
    const actual = element.find('amp-img').props().src

    expect(actual).toBe(expected)
  })

  it('passes the "width" prop to "amp-img"', () => {
    const widthProp = '50'
    const element = shallow(<Image src="test" width={widthProp} height="30" />)
    const expected = widthProp
    const actual = element.find('amp-img').props().width

    expect(actual).toBe(expected)
  })

  it('passes the "height" prop to "amp-img"', () => {
    const heightProp = '50'
    const element = shallow(<Image src="test" width="30" height={heightProp} />)
    const expected = heightProp
    const actual = element.find('amp-img').props().height

    expect(actual).toBe(expected)
  })

  it('passes the "layout" prop to "amp-img"', () => {
    const layoutProp = '50'
    const element = shallow(
      <Image src="test" width="30" height="30" layout={layoutProp} />
    )
    const expected = layoutProp
    const actual = element.find('amp-img').props().layout

    expect(actual).toBe(expected)
  })

  it('passes the "alt" prop to "amp-img"', () => {
    const altProp = '50'
    const element = shallow(
      <Image src="test" width="30" height="30" alt={altProp} />
    )
    const expected = altProp
    const actual = element.find('amp-img').props().alt

    expect(actual).toBe(expected)
  })
})

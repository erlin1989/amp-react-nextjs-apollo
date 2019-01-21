import React from 'react'
import { shallow } from 'enzyme'
import Logo from 'components/atoms/Logo'
import { Footer, StyledFooter, FooterBlock, FooterBlockTitle } from './Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />)
  })

  it('renders a "StyledFooter"', () => {
    const element = shallow(<Footer />)
    expect(element.find(StyledFooter)).toHaveLength(1)
  })

  it('renders a "Logo"', () => {
    const element = shallow(<Footer />)
    expect(element.find(Logo)).toHaveLength(1)
  })

  it('renders 3 footer blocks', () => {
    const element = shallow(<Footer />)
    expect(element.find(FooterBlock)).toHaveLength(3)
  })
})

describe('FooterBlock', () => {
  const footer = shallow(<Footer />)
  const footerBlocks = footer.find(FooterBlock)

  it('each FooterBlock has a title', () => {
    footerBlocks.forEach((footerBlock) => {
      const actual = footerBlock.find(FooterBlockTitle)
      expect(actual).toHaveLength(1)
    })
  })
})

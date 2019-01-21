import React from 'react'
import { shallow } from 'enzyme'
import { Clock } from './Clock'
import { Close } from './Close'
import { Expand } from './Expand'
import { Info } from './Info'
import { Location } from './Location'
import { PriceTag } from './PriceTag'
import { Review } from './Review'
import { Star } from './Star'
import { Timer } from './Timer'

describe('Icons', () => {
  it('renders without crashing', () => {
    shallow(<Clock />)
    shallow(<Close />)
    shallow(<Expand />)
    shallow(<Info />)
    shallow(<Location />)
    shallow(<PriceTag />)
    shallow(<Review />)
    shallow(<Star />)
    shallow(<Timer />)
  })
})

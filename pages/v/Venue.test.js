import React from 'react'
import { shallow } from 'enzyme'
import { Venue } from './Venue'

it('renders without crashing', () => {
  shallow(<Venue slug="elwood-thai-massage" />)
})

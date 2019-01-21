import React from 'react'
import { shallow } from 'enzyme'
import { VenuePage } from './VenuePage'

describe('VenuePage', () => {
  it('renders without crashing', () => {
    shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
  })
})

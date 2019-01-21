import React from 'react'
import { shallow } from 'enzyme'
import {
  VenueService,
  LightboxTitle,
  LightboxDescription,
  StyledService,
  StyledTitle,
  InfoButton,
  BookButton,
  StyledBadge,
} from './VenueService'
import Duration from 'components/molecules/Duration'
import Price from 'components/molecules/Price'
import Lightbox from 'components/molecules/Lightbox'

describe('VenueService', () => {
  it('renders without crashing', () => {
    shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )
  })

  it('renders a "StyledService"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(StyledService)
    expect(actual).toHaveLength(1)
  })

  it('renders a "StyledTitle"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(StyledTitle)
    expect(actual).toHaveLength(1)
  })

  it('renders a "Price"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(Price)
    expect(actual).toHaveLength(1)
  })

  it('passes the "price" prop to "Price"', () => {
    const price = 50
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={price}
      />
    )
    const expected = price
    const actual = element.find(Price).props().value
    expect(actual).toBe(expected)
  })

  it('renders a "Duration"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(Duration)
    expect(actual).toHaveLength(1)
  })

  it('passes the "duration" prop to "Duration"', () => {
    const duration = 50
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={duration}
        price={50}
      />
    )
    const expected = duration
    const actual = element.find(Duration).props().duration
    expect(actual).toBe(expected)
  })

  it('renders a "InfoButton"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(InfoButton)
    expect(actual).toHaveLength(1)
  })

  it('renders a "BookButton"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(BookButton)
    expect(actual).toHaveLength(1)
  })

  it('generates a booking link with the "slug", "postcode", "id" and "suburbSlug" props and passes to "BookButton"', () => {
    const slug = 'slug'
    const suburbSlug = 'suburb-slug'
    const postcode = '1010'
    const id = 'test-id'
    const expected = `https://www.bookwell.com.au/venue/${slug}/${suburbSlug}/${postcode}?srv=${id}`

    const element = shallow(
      <VenueService
        id={id}
        postcode={postcode}
        slug={slug}
        suburbSlug={suburbSlug}
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(BookButton).props().href
    expect(actual).toBe(expected)
  })
})

describe('has a "description" prop', () => {
  it('renders a "Lightbox" component', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
        description="Test description"
      />
    )

    const actual = element.find(Lightbox)
    expect(actual).toHaveLength(1)
  })

  it('passes the "id" prop to the "Lightbox"', () => {
    const id = 'test-id'
    const element = shallow(
      <VenueService
        id={id}
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
        description="Test description"
      />
    )
    const expected = id
    const actual = element.find(Lightbox).props().id
    expect(actual).toBe(expected)
  })

  it('renders the "name" to the "Lightbox"', () => {
    const title = 'Test title'
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name={title}
        duration={40}
        price={50}
        description="Test description"
      />
    )
    const expected = title

    const actual = element
      .find(Lightbox)
      .find(LightboxTitle)
      .props().children
    expect(actual).toBe(expected)
  })

  it('renders the "description" to the "Lightbox"', () => {
    const description = 'Test description'
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test name"
        duration={40}
        price={50}
        description={description}
      />
    )
    const expected = description

    const actual = element
      .find(Lightbox)
      .find(LightboxDescription)
      .props().children
    expect(actual).toBe(expected)
  })
})

describe('has no "description" prop', () => {
  it('does not render a "Lightbox" component', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(Lightbox)
    expect(actual).toHaveLength(0)
  })

  it('disables the "InfoButton"', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )
    const expected = true
    const actual = element.find(InfoButton).props().isDisabled
    expect(actual).toBe(expected)
  })
})

describe('has a "isPopular" prop', () => {
  it('renders a "StyledBadge" component', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
        isPopular
      />
    )

    const actual = element.find(StyledBadge)
    expect(actual).toHaveLength(1)
  })
})

describe('has no "isPopular" prop', () => {
  it('does not render a "StyledBadge" component', () => {
    const element = shallow(
      <VenueService
        id="test"
        postcode="1010"
        slug="test"
        suburbSlug="test"
        name="Test service"
        duration={40}
        price={50}
      />
    )

    const actual = element.find(StyledBadge)
    expect(actual).toHaveLength(0)
  })
})

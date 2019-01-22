import React from 'react'
import { shallow } from 'enzyme'
import {
  VenuePage,
  StyledHero,
  StyledHeader,
  StyledVenueName,
  StyledAddress,
  StyledAccordion,
  StyledServices,
  StyledPopularServices,
  ServiceCategory,
} from './VenuePage'
import Image from 'components/atoms/Image'
import Carousel from 'components/molecules/Carousel'
import Rating from 'components/molecules/Rating'
import VenueService from 'components/organisms/VenueService'

const mockSlide = {
  sortOrder: 0,
  name: '59ee9247-cbd8-404e-8a2d-0a8e484b38d6.jpg',
  id: '03ad1260-32e6-44dc-8356-65d21f9cc547',
}

const mockReview = {
  text: 'Absolutely wonderful',
  status: 'LIVE',
  reply: null,
  rating: 5,
  insertedAt: '2018-02-20T20:53:45.160Z',
  id: '0f39b914-a4a4-4150-ba47-8926f3e47562',
  client: {
    id: 'b48b1c66-0cac-4820-b968-89e64a368f58',
    firstName: 'Aleesha',
  },
}

const mockService = {
  sortOrder: 2,
  price: 69,
  paddingBefore: 0,
  paddingAfter: 0,
  name: 'Deep Tissue Massage',
  id: 'e6b5b4ff-826d-4dd6-9a0e-330588b6cb67',
  heading: {
    slug: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    id: '583d908e-57b2-4147-bc51-fbfd4d9d1cc2',
  },
  duration: 60,
  description:
    'Deep tissue massage therapy uses deep finger pressure in slow, firm strokes to realign deeper layers of muscle. It has theraputic benefits for chronic aches and pains as well as alleviating stiffness in areas such as the neck, upper and lower back, shoulders and leg muscles. Benefits of Deep Tissue Massage: Reduces Chronic Pain, Improves Blood Pressure, Heals Injured Muscles, Relieves Stress, Elevates Mood By Releasing Seratonin, Breaks Up Scar Tissue. Everyone can benefit from deep tissue massage as it alleviates muscle tension and increases the production of seratonin, which is the hormone that boosts feelings of happiness and well being. This promotes relaxation, lowers blood pressure and is a great relief for people suffering from chronic stress. However it is most often recommended to those suffering chronic pain or posture related injuries and sports injuries as well as those experiencing stress and high blood pressure. This massage helps to increase the flow of blood through the body which reduces areas of inflammation that cause pain.Deep tissue massage therapy helps to rehabilitate injured muscles as it releases toxins from the muscles and stretches out tense and twisted muscle knots. Scar tissue can also be broken up and even eradicated as the massage improves lymphatic circulation and drainage which enhances the range of motion and flexibility in affected areas. ',
}

const mockServiceHeading = {
  sortOrder: 0,
  slug: 'thai-massage',
  services: [],
  name: 'Thai Massage',
  id: '2fd3b4bd-8801-4145-aa06-e8608dc9e947',
}

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

  it('always renders a "StyledHeader"', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledHeader)

    expect(actual).toHaveLength(1)
  })

  it('always renders a "StyledAccordion"', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledAccordion)

    expect(actual).toHaveLength(1)
  })

  it('passes the "rating" prop to the "Rating" component', () => {
    const rating = 5
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={rating}
      />
    )
    const expected = rating
    const actual = element
      .find(StyledHeader)
      .find(Rating)
      .props().rating

    expect(actual).toBe(expected)
  })

  it('passes the number of reviews to the "Rating" component', () => {
    const numReviews = 8
    const reviews = Array(numReviews)
      .fill()
      .map(() => ({ ...mockReview }))

    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        reviews={reviews}
      />
    )
    const expected = numReviews
    const actual = element
      .find(StyledHeader)
      .find(Rating)
      .props().numReviews

    expect(actual).toBe(expected)
  })
})

describe('StyledHeader', () => {
  it('always renders a "StyledVenueName"', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledHeader).find(StyledVenueName)

    expect(actual).toHaveLength(1)
  })

  it('always renders a "StyledAddress"', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledHeader).find(StyledAddress)

    expect(actual).toHaveLength(1)
  })

  it('always renders a rating', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledHeader).find(Rating)

    expect(actual).toHaveLength(1)
  })
})

describe('PopularServices', () => {
  it('does not render "StyledPopularServices" if there is no "popularServices" prop', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledPopularServices)

    expect(actual).toHaveLength(0)
  })

  it('renders "StyledPopularServices" if there is an array of "popularServices" prop', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        popularServices={[{ ...mockService }]}
      />
    )
    const actual = element.find(StyledPopularServices)

    expect(actual).toHaveLength(1)
  })

  it('renders the corresponding amount of "VenueService" inside "StyledPopularServices"', () => {
    const numServices = 9
    const popularServices = Array(numServices)
      .fill()
      .map(() => ({ ...mockService }))

    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        popularServices={popularServices}
      />
    )
    const expected = numServices
    const actual = element.find(StyledPopularServices).find(VenueService)

    expect(actual).toHaveLength(expected)
  })
})

describe('Services', () => {
  it('does not render "StyledServices" if there is no "services" prop', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledServices)

    expect(actual).toHaveLength(0)
  })

  it('renders "StyledServices" if there is an array of "services" prop', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        services={[{ ...mockServiceHeading }]}
      />
    )
    const actual = element.find(StyledServices)

    expect(actual).toHaveLength(1)
  })

  it('renders the corresponding amount of "ServiceCategory"', () => {
    const numSections = 3
    const headings = Array(numSections)
      .fill()
      .map(() => ({ ...mockServiceHeading }))

    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        services={headings}
      />
    )
    const expected = numSections
    const actual = element.find(StyledServices).find(ServiceCategory)

    expect(actual).toHaveLength(expected)
  })
})

describe('has no "slides" prop defined', () => {
  it('does not render an "Image" in "StyledHero"', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledHero).find(Image)

    expect(actual).toHaveLength(0)
  })

  it('does not render a "Carousel" in "StyledHero"', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
      />
    )
    const actual = element.find(StyledHero).find(Carousel)

    expect(actual).toHaveLength(0)
  })
})

describe('has "slides" prop defined', () => {
  it('renders an "Image" in "StyledHero" if there is 1 slide', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        slides={[{ ...mockSlide }]}
      />
    )
    const actual = element.find(StyledHero).find(Image)

    expect(actual).toHaveLength(1)
  })

  it('does not render a "Carousel" if there is 1 slide', () => {
    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        slides={[{ ...mockSlide }]}
      />
    )
    const actual = element.find(StyledHero).find(Carousel)

    expect(actual).toHaveLength(0)
  })

  it('renders the corresponding amount of "slides" in the "Carousel"', () => {
    const numSlides = 5
    const mockSlides = Array(numSlides)
      .fill()
      .map(() => ({ ...mockSlide }))

    const element = shallow(
      <VenuePage
        venueName="Test"
        slug="test"
        postcode="test"
        suburbSlug="test"
        rating={5}
        slides={mockSlides}
      />
    )
    const actual = element
      .find(StyledHero)
      .find(Carousel)
      .props().children.length
    const expected = numSlides

    expect(actual).toBe(expected)
  })
})

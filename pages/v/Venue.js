import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'
import VenuePage from 'components/templates/VenuePage'

const query = gql`
  query VenueQuery($slug: String!) {
    venue(slug: $slug) {
      id
      status
      name
      description
      slug
      displayAddress
      location
      creditCardOnly
      phoneNumber
      openingHours {
        dayOfWeek
        startMinute
        endMinute
      }
      popularServices {
        id
        name
        sortOrder
        price
        paddingBefore
        paddingAfter
        duration
        description
        heading {
          id
          name
          slug
        }
      }
      headings {
        id
        name
        slug
        sortOrder
        services(venue: $slug) {
          id
          name
          sortOrder
          price
          paddingBefore
          paddingAfter
          duration
          description
        }
      }
      tags {
        id
        name
        slug
        category {
          id
          slug
          name
        }
      }
      suburb {
        id
        name
        slug
        postcode
        uniqueIdentifier
        location
        city {
          id
          name
          slug
          state {
            id
            name
            timezone
          }
        }
      }
      venueImages {
        id
        name
        sortOrder
      }
      reviewInfo {
        rating
        count
      }
      reviews {
        id
        status
        text
        rating
        reply
        insertedAt
        client {
          id
          firstName
        }
      }
    }
  }
`

export function Venue({ slug }) {
  return (
    <Query skip={!slug} query={query} ssr variables={{ slug }}>
      {({ data, loading, error }) => {
        if (loading) {
          return 'Loading'
        }
        if (error) {
          return 'Error'
        }

        return (
          <React.Fragment>
            <Head>
              <title>{data.venue.name}</title>
            </Head>
            <Header />
            <VenuePage
              slides={data.venue.venueImages}
              venueName={data.venue.name}
              address={data.venue.displayAddress}
              popularServices={data.venue.popularServices}
              services={data.venue.headings}
              description={data.venue.description}
              phoneNumber={data.venue.phoneNumber}
              openingHours={data.venue.openingHours}
              reviews={data.venue.reviews}
              rating={data.venue.reviewInfo.rating}
              slug={data.venue.slug}
              postcode={data.venue.suburb.postcode}
              suburbSlug={data.venue.suburb.slug}
            />
            <Footer />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

Venue.propTypes = {
  slug: PropTypes.string.isRequired,
}

export default Venue

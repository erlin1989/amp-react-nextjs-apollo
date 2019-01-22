import gql from 'graphql-tag'

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

export default query

import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'components/molecules/Carousel'
import Image from 'components/atoms/Image'
import Typography from 'components/atoms/Typography'
import VenueService from 'components/organisms/VenueService'
import Accordion from 'components/molecules/Accordion'
import AccordionItem from 'components/molecules/AccordionItem'
import Rating from 'components/molecules/Rating'
import Review from 'components/organisms/Review'
import InfoIcon from 'components/atoms/Icon/Info'
import ReviewsIcon from 'components/atoms/Icon/Review'
import OpeningHoursIcon from 'components/atoms/Icon/Clock'
import OpeningHour from 'components/molecules/OpeningHour'
import nl2br from 'react-nl2br'
import styled from 'styled-components'
import { CDN_URL } from 'constants/config'

const StyledHeader = styled.header`
  display: grid;
  align-items: center;
  grid-gap: ${({ theme }) => theme.spacing.xs}px 0;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing.xl}px
    ${({ theme }) => theme.spacing.md}px;
`

const StyledAddress = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`

const SectionTitle = styled(Typography)`
  margin: 0 ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
`

const StyledAccordion = styled(Accordion)`
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`

const ServiceCategory = styled.section`
  padding: ${({ theme }) => theme.spacing.lg}px 0;
`

const StyledReviews = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.md}px;
`

export function VenuePage({
  venueName,
  slides,
  address,
  services,
  popularServices,
  slug,
  postcode,
  suburbSlug,
  description,
  reviews,
  openingHours,
  rating,
}) {
  return (
    <main>
      {slides.length === 1 && (
        <Image src={`${CDN_URL}/${slides[0].name}`} width="530" height="353" />
      )}
      {slides.length > 1 && (
        <Carousel width="530" height="353">
          {slides.map((slide) => {
            return (
              <Image
                key={slide.id}
                src={`${CDN_URL}/${slide.name}`}
                width="530"
                height="353"
              />
            )
          })}
        </Carousel>
      )}
      <StyledHeader>
        <Typography tag="h1">{venueName}</Typography>
        <StyledAddress tag="h5">{address}</StyledAddress>
        <Rating rating={rating} numReviews={reviews.length} />
      </StyledHeader>

      <StyledAccordion>
        <AccordionItem
          header={
            <React.Fragment>
              <InfoIcon />
              <Typography tag="h4">About</Typography>
            </React.Fragment>
          }
        >
          <Typography tag="p">{nl2br(description)}</Typography>
        </AccordionItem>
        {openingHours.length && (
          <AccordionItem
            header={
              <React.Fragment>
                <OpeningHoursIcon />
                <Typography tag="h4">Opening hours</Typography>
              </React.Fragment>
            }
          >
            {openingHours.map((openingHour) => {
              return (
                <OpeningHour
                  key={openingHour.dayOfWeek}
                  startMinute={openingHour.startMinute}
                  endMinute={openingHour.endMinute}
                  dayOfWeek={openingHour.dayOfWeek}
                />
              )
            })}
          </AccordionItem>
        )}

        {reviews.length && (
          <AccordionItem
            header={
              <React.Fragment>
                <ReviewsIcon />
                <Typography tag="h4">Reviews ({reviews.length})</Typography>
              </React.Fragment>
            }
          >
            <StyledReviews>
              {reviews.map((review) => {
                return (
                  <Review
                    key={review.id}
                    author={review.client.firstName}
                    review={review.text}
                    rating={review.rating}
                    date={review.insertedAt}
                  />
                )
              })}
            </StyledReviews>
          </AccordionItem>
        )}
      </StyledAccordion>

      {popularServices.length && (
        <ServiceCategory>
          <SectionTitle tag="h2" textAlign="left">
            Popular services
          </SectionTitle>
          {popularServices.map((service) => {
            return (
              <VenueService
                key={service.id}
                id={service.id}
                duration={service.duration}
                price={service.price}
                name={service.name}
                slug={slug}
                postcode={postcode}
                suburbSlug={suburbSlug}
                description={service.description}
              />
            )
          })}
        </ServiceCategory>
      )}

      {services.map((serviceHeading) => {
        return (
          <ServiceCategory key={serviceHeading.id}>
            <SectionTitle tag="h2" textAlign="left">
              {serviceHeading.name}
            </SectionTitle>
            {serviceHeading.services.map((service) => {
              const isPopular = popularServices.some((a) => a.id === service.id)
              return (
                <VenueService
                  key={service.id}
                  id={service.id}
                  duration={service.duration}
                  price={service.price}
                  name={service.name}
                  slug={slug}
                  postcode={postcode}
                  suburbSlug={suburbSlug}
                  description={service.description}
                  isPopular={isPopular}
                />
              )
            })}
          </ServiceCategory>
        )
      })}
    </main>
  )
}

VenuePage.propTypes = {
  venueName: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object),
  address: PropTypes.string,
  services: PropTypes.arrayOf(PropTypes.object),
  popularServices: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
  rating: PropTypes.number,
  numReviews: PropTypes.number,
  description: PropTypes.string,
  openingHours: PropTypes.arrayOf(PropTypes.object),
  phoneNumber: PropTypes.string,
  slug: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  suburbSlug: PropTypes.string.isRequired,
}

VenuePage.defaultProps = {
  slides: [],
  popularServices: [],
  services: [],
  tags: [],
  openingHours: [],
  reviews: [],
}

export default VenuePage

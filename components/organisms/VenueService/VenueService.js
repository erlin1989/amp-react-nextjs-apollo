import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Typography from 'components/atoms/Typography'
import Duration from 'components/molecules/Duration'
import Price from 'components/molecules/Price'
import Button from 'components/atoms/Button'
import Lightbox from 'components/molecules/Lightbox'
import Badge from 'components/atoms/Badge'

export const StyledService = styled.article`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.quinary.light};
`

export const StyledTitle = styled(Typography)``

export const Top = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  justify-items: start;
  justify-content: space-between;
  grid-gap: 0 ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.md}px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.quinary.light};
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
`

export const LightboxTitle = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`

export const LightboxDescription = styled(Typography)``

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: 0;
  right: 0;
  transform-origin: center center;
  transform: rotate(30deg) translate(30%, -55%);
`

export const InfoButton = styled(Button)``
export const BookButton = styled(Button)``

export function VenueService({
  name,
  duration,
  price,
  description,
  id,
  slug,
  postcode,
  suburbSlug,
  isPopular,
}) {
  return (
    <StyledService>
      {description && (
        <Lightbox id={id}>
          <LightboxTitle tag="h3">{name}</LightboxTitle>
          <LightboxDescription tag="p">{description}</LightboxDescription>
        </Lightbox>
      )}
      <Top>
        <StyledTitle tag="h5">{name}</StyledTitle>
      </Top>
      <Bottom>
        <Duration duration={duration} />
        <Price value={price} />
        <InfoButton
          isDisabled={!description}
          themeColor="secondary"
          on={`tap:${id}.open`}
        >
          Info
        </InfoButton>
        <BookButton
          themeColor="primary"
          href={`https://www.bookwell.com.au/venue/${slug}/${suburbSlug}/${postcode}?srv=${id}`}
        >
          {isPopular && <StyledBadge>Popular</StyledBadge>}
          Book
        </BookButton>
      </Bottom>
    </StyledService>
  )
}

VenueService.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  slug: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  suburbSlug: PropTypes.string.isRequired,
  isPopular: PropTypes.bool,
}

export default VenueService

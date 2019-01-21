import React from 'react'
import Typography from 'components/atoms/Typography'
import Logo from 'components/atoms/Logo'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.text.secondary};
  grid-gap: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.palette.quaternary.main};
  padding: ${({ theme }) => theme.spacing.lg}px
    ${({ theme }) => theme.spacing.md}px;
  overflow: hidden;

  &::after {
    content: '';
    width: 150px;
    height: 150px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(50%, 30%) rotate(12deg);
    background-color: ${({ theme }) => theme.palette.quaternary.dark};
  }
`

export const FooterBlock = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.sm}px;
  justify-items: start;
`

export const FooterBlockTitle = styled(Typography)``

export function Footer() {
  return (
    <StyledFooter>
      <Logo themeColor="tertiary" />
      <FooterBlock>
        <FooterBlockTitle tag="h4" themeColor="secondary">
          Company
        </FooterBlockTitle>
        <a href="https://www.bookwell.com.au/about">About</a>
        <a href="https://www.bookwell.com.au/join">Join</a>
      </FooterBlock>
      <FooterBlock>
        <FooterBlockTitle tag="h4" themeColor="secondary">
          Legal
        </FooterBlockTitle>
        <a href="https://www.bookwell.com.au/privacy">Privacy</a>
        <a href="https://www.bookwell.com.au/terms">Terms</a>
      </FooterBlock>
      <FooterBlock>
        <FooterBlockTitle tag="h4" themeColor="secondary">
          Help
        </FooterBlockTitle>
        <a href="https://www.bookwell.com.au/contact-us">Contact</a>
        <a href="https://www.bookwell.com.au/faq">FAQ</a>
      </FooterBlock>
    </StyledFooter>
  )
}

export default Footer

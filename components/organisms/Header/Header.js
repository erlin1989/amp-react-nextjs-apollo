import React from 'react'
import Logo from 'components/atoms/Logo'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.md}px;
`

export function Header() {
  return (
    <StyledHeader>
      <a href="https://www.bookwell.com.au">
        <Logo />
      </a>
    </StyledHeader>
  )
}

export default Header

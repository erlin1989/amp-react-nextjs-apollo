import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExpandIcon from 'components/atoms/Icon/Expand'

export const StyledSection = styled.section`
  margin-top: -2px;
`

export const StyledIcon = styled(ExpandIcon)`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.md}px;
  transform: translate(0, -50%);
  transform-origin: center center;
`

export const StyledHeader = styled.header`
  outline: 0;
  background: ${({ theme }) => theme.palette.secondary.main};
  border-top: 2px solid ${({ theme }) => theme.palette.tertiary.main};
  border-bottom: 2px solid ${({ theme }) => theme.palette.tertiary.main};
  color: ${({ theme }) => theme.palette.tertiary.main};
  padding-right: 50px;
  position: relative;

  &[aria-expanded='true'] {
    ${StyledIcon} {
      transform: rotate(180deg) translate(0, 50%);
    }
  }
`
export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.md}px;
`
export const StyledContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md}px;
`

export function AccordionItem({ children, header }) {
  return (
    <StyledSection>
      <StyledHeader>
        <HeaderContent>{header}</HeaderContent>
        <StyledIcon />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledSection>
  )
}

AccordionItem.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default AccordionItem

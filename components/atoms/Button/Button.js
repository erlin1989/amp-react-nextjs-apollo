import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border-radius: 0;
  border: 0;
  background-color: ${({ theme, themeColor, isDisabled }) =>
    isDisabled ? theme.palette.disabled.main : theme.palette[themeColor].main};
  color: ${({ theme }) => theme.palette.text.secondary};
  cursor: pointer;
  overflow: hidden;
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : '')};
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.md}px;
`

export function Button({
  children,
  isDisabled,
  href,
  on,
  themeColor,
  ...rest
}) {
  // if passing the on attribute, add an extra div tag
  // because the styled-component library filters out non-valid html elements
  // however on is needed for AMP tap events
  return (
    <StyledButton
      as={href ? 'a' : 'div'}
      themeColor={themeColor}
      href={href}
      isDisabled={isDisabled}
      {...rest}
    >
      {!isDisabled && on ? (
        <div
          on={on}
          role="button"
          tabIndex="0"
          style={{
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            outline: 0,
          }}
        />
      ) : null}
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  on: PropTypes.string,
  isDisabled: PropTypes.bool,
  themeColor: PropTypes.oneOf(['primary', 'secondary']),
}

Button.defaultProps = {
  themeColor: 'primary',
}

export default Button

import React from 'react'
import { AmpLightbox } from 'react-amphtml'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CloseIcon from 'components/atoms/Icon/Close'

export const StyledOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.lg}px;
`

export const StyledBox = styled.div`
  position: relative;
  max-height: 95vh;
  height: 300px;
  background-color: ${({ theme }) => theme.palette.tertiary.main};
  padding: ${({ theme }) => theme.spacing.lg}px 0;
  border-radius: 12px;
  border-top-right-radius: 0;
`

export const StyledContent = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.lg}px;
`

export function Lightbox({ children, id }) {
  return (
    <AmpLightbox id={id} layout="nodisplay" scrollable="">
      <StyledOverlay>
        <StyledBox>
          {/* Inline style this close button since styled-component filters out 'on' attribute */}
          <button
            on={`tap:${id}.close`}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              cursor: 'pointer',
              transform: 'translate(0, -40%)',
              backgroundColor: 'white',
              borderRadius: '50%',
              borderBottomRightRadius: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              border: 0,
              outline: 0,
            }}
          >
            <CloseIcon />
          </button>
          <StyledContent>{children}</StyledContent>
        </StyledBox>
      </StyledOverlay>
    </AmpLightbox>
  )
}

Lightbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Lightbox

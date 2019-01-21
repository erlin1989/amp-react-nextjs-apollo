import React from 'react'
import PropTypes from 'prop-types'
import { AmpAccordion } from 'react-amphtml'

export function Accordion({ children, ...rest }) {
  return (
    <AmpAccordion animate="" disable-session-states="" {...rest}>
      {children}
    </AmpAccordion>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Accordion

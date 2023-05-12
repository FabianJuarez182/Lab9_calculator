import React from 'react'
import PropTypes from 'prop-types'
import './Screen.css'

function Screen({ value }) {
  // Limitar la longitud del valor a 9 caracteres
  const truncatedValue = value.length > 9 ? 'ERROR' : value

  return (
    <div className="screen">
      <p className="screen_content">{truncatedValue}</p>
    </div>
  )
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Screen

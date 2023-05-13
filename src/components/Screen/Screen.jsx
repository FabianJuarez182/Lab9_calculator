/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Screen.css'

function Screen({ value }) {
  const truncatedValue = value.length > 9 ? 'ERROR' : value
  const [, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="screen">
      <input
        className="screen_content"
        role="screen"
        onChange={handleChange}
        value={truncatedValue}
      />
    </div>
  )
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Screen

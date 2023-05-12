/* eslint-disable no-new-func */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-eval */
import './Calculator.css'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Screen from '../Screen/Screen'

function Calculator() {
  const [value, setValue] = useState('')

  const CalcButtons = [
    7,
    8,
    9,
    'DEL',
    4,
    5,
    6,
    '+',
    1,
    2,
    3,
    '-',
    '.',
    0,
    '/',
    '*',
    '%',
    '+/-',
  ]

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value

    if (value.length < 9) {
      setValue((prevValue) => prevValue + buttonValue)
    }
  }

  const handleDeleteClick = () => {
    setValue((prevValue) => prevValue.slice(0, -1))
  }

  const handleResetClick = () => {
    setValue('')
  }

  const handleNegateClick = () => {
    if (value !== '') {
      setValue((prevValue) => {
        const firstChar = prevValue.charAt(0)
        return firstChar === '-' ? prevValue.slice(1) : `-${prevValue}`
      })
    }
  }

  const getResults = () => {
    try {
      const evaluatedValue = Function(`'use strict'; return (${value});`)()
      const result = Number.isInteger(evaluatedValue)
        ? evaluatedValue.toString()
        : typeof evaluatedValue === 'number'
        ? evaluatedValue.toFixed(7)
        : ''
      // Verificar si el resultado es negativo
      const isNegative = Number(result) < 0

      // Mostrar "ERROR" si el resultado es negativo
      if (isNegative) {
        setValue('ERROR')
      } else {
        // Limitar la longitud del resultado a 9 caracteres
        const truncatedResult = result.length > 9 ? 'ERROR' : result
        setValue(truncatedResult)
      }
    } catch (error) {
      setValue('ERROR')
    }
  }

  return (
    <>
      <Screen value={value} />
      <div className="grid-container">
        {CalcButtons.map((button) => {
          return (
            <button
              type="button"
              className={button === 'DEL' ? 'button delete' : 'button'}
              value={button}
              key={nanoid()}
              onClick={
                button === 'DEL'
                  ? handleDeleteClick
                  : button === '+/-'
                  ? handleNegateClick
                  : handleButtonClick
              }
            >
              {button}
            </button>
          )
        })}
        <button type="button" className="reset" onClick={handleResetClick}>
          RESET
        </button>
        <button type="button" className="equals" onClick={getResults}>
          =
        </button>
      </div>
    </>
  )
}

export default Calculator

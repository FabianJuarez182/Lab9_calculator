/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

describe('Test for the diffetent actions to calculator components', () => {
  test('Renders correctly', () => {
    render(<Calculator />)
  })
 // length 9 characteres maximum
  test('the text contains only the 9 numbers of maximum length', () => {
    const { getByRole } = render(<Calculator />)
    fireEvent.click(getByRole('button', { name: '1' }))
    fireEvent.click(getByRole('button', { name: '2' }))
    fireEvent.click(getByRole('button', { name: '3' }))
    fireEvent.click(getByRole('button', { name: '4' }))
    fireEvent.click(getByRole('button', { name: '5' }))
    fireEvent.click(getByRole('button', { name: '6' }))
    fireEvent.click(getByRole('button', { name: '7' }))
    fireEvent.click(getByRole('button', { name: '8' }))
    fireEvent.click(getByRole('button', { name: '9' }))

    expect(getByRole('screen')).toHaveDisplayValue('123456789')

    fireEvent.click(getByRole('button', { name: '1' }))

    expect(getByRole('screen')).toHaveDisplayValue('123456789')
  })
 // decimal button read like a character
  test('Decimal button reads as character', () => {
    const { getByRole } = render(<Calculator />)
    fireEvent.click(getByRole('button', { name: '1' }))
    fireEvent.click(getByRole('button', { name: '2' }))
    fireEvent.click(getByRole('button', { name: '3' }))
    fireEvent.click(getByRole('button', { name: '4' }))
    fireEvent.click(getByRole('button', { name: '5' }))
    fireEvent.click(getByRole('button', { name: '6' }))
    fireEvent.click(getByRole('button', { name: '7' }))
    fireEvent.click(getByRole('button', { name: '8' }))
    fireEvent.click(getByRole('button', { name: '.' }))
    fireEvent.click(getByRole('button', { name: '0' }))

    expect(getByRole('screen')).toHaveDisplayValue('12345678.')
  })
// add tow numbers correctly
  test('add tow numbers correctly', () => {
    const { getByText, getByRole } = render(<Calculator />)
    fireEvent.click(getByText('9'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))
    expect(getByRole('screen')).toHaveDisplayValue('11')
  })

 // dividing a result with many decimal places
  test('divide 2 numbers and limit the result to 9 numbers', () => {
    const { getByText, getByRole } = render(<Calculator />)
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('7'))
    fireEvent.click(getByText('='))
    expect(getByRole('screen')).toHaveDisplayValue('3.1428571')
  })

// negate a number
test('negate a number', () => {
  const { getByRole } = render(<Calculator />)
  fireEvent.click(getByRole('button', { name: '7' }))
  fireEvent.click(getByRole('button', { name: '+/-' }))
  expect(getByRole('screen')).toHaveDisplayValue('-7')
})
// module a numbers
test('mod function', () => {
  const { getByRole } = render(<Calculator />)
  fireEvent.click(getByRole('button', { name: '4' }))
  fireEvent.click(getByRole('button', { name: '%' }))
  fireEvent.click(getByRole('button', { name: '2' }))
  fireEvent.click(getByRole('button', { name: '=' }))
  expect(getByRole('screen')).toHaveDisplayValue('0')
})


})

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator component', () => {
  it('Renders correctly', () => {
    render(<Calculator />)
  })

  it('Number buttons work and the max displayed are 9 characters', () => {
    const { getByRole } = render(<Calculator />)
    const display = getByRole('screen')

    fireEvent.click(getByRole('button', { name: '1' }))
    fireEvent.click(getByRole('button', { name: '2' }))
    fireEvent.click(getByRole('button', { name: '3' }))
    fireEvent.click(getByRole('button', { name: '4' }))
    fireEvent.click(getByRole('button', { name: '5' }))
    fireEvent.click(getByRole('button', { name: '6' }))
    fireEvent.click(getByRole('button', { name: '7' }))
    fireEvent.click(getByRole('button', { name: '8' }))
    fireEvent.click(getByRole('button', { name: '9' }))

    expect(display).toHaveDisplayValue('123456789')

    fireEvent.click(getByRole('button', { name: '1' }))

    expect(display).toHaveDisplayValue('123456789')
  })

  it('Decimal button reads as character', () => {
    const { getByRole } = render(<Calculator />)
    const display = getByRole('screen')

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

    expect(display).toHaveDisplayValue('12345678.')
  })
})

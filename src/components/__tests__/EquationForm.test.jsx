import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { describe, it, expect } from 'vitest'
import EquationForm from '../EquationForm'

describe('EquationForm', () => {
  it('solves quadratic equations', async () => {
    render(<EquationForm />)
    await userEvent.type(screen.getByLabelText('a'), '1')
    await userEvent.type(screen.getByLabelText('b'), '-3')
    await userEvent.type(screen.getByLabelText('c'), '2')
    await userEvent.click(screen.getByRole('button', { name: /solve/i }))
    expect(
      await screen.findByText('Two real roots: 2.0000, 1.0000'),
    ).toBeInTheDocument()
  })
})

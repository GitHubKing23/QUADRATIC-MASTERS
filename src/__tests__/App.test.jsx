import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

vi.mock('../components/Graph', () => ({
  default: () => <div data-testid="graph" />,
}))

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /quadratic solver/i })).toBeInTheDocument()
  })
})

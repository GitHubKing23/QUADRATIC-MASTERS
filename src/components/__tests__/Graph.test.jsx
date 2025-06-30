import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import Graph from '../Graph'

vi.mock('react-chartjs-2', () => ({
  Line: (props) => <canvas data-testid="line-chart" {...props} />,
}))

describe('Graph', () => {
  it('renders a line chart', () => {
    render(<Graph a={1} b={2} c={1} />)
    expect(screen.getByTestId('line-chart')).toBeInTheDocument()
  })
})

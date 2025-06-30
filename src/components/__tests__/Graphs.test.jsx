import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import Graph from '../Graph'

// Debug: check if Graph is imported correctly
console.log('DEBUG - Imported Graph component:', Graph)

// Mock the chart component
vi.mock('react-chartjs-2', () => ({
  Line: (props) => <canvas data-testid="line-chart" {...props} />,
}))

describe('Graph', () => {
  it('should be defined', () => {
    // This will fail if the Graph import is broken
    expect(Graph).toBeDefined()
  })

  it('renders a line chart', () => {
    render(<Graph a={1} b={2} c={1} />)
    expect(screen.getByTestId('line-chart')).toBeInTheDocument()
  })
})


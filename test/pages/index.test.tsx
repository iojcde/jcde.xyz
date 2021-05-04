import React from 'react'
import Home from '../../pages/index'
import { render, screen } from '@testing-library/react'
describe('Home page', () => {
  it('Renders without crashing', () => {
    render(<Home />, {})
    expect(screen.getByText("Hi, I'm JcdeA")).toBeInTheDocument()
  })
})

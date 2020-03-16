import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom'

describe('App', () => {
    it('renders without crashing?', () => {
        const { getByText } = render(<App />)
        const app = getByText(/react wars/i)
        expect(app).toBeInTheDocument()
    })
})

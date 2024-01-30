import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App"
/**
 * @jest-environment jsdom
 */

describe('Tic Tac Toe App', () => {
    it('UPDATE ME', async() => {
        render(<App />)
        expect(screen.queryByText(/x/i)).toBeVisible()
    })
})
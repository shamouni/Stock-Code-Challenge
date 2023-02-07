import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import SimpleList from '../SimpleList'

const mockData = ['btc']

describe('SimpleList Component', () => {
  beforeEach(() => {
    render(<SimpleList data={mockData} />)
  })

  test('component renders', () => {
    const txt = screen.getByTestId('search')
    expect(txt).toBeInTheDocument()
  })

  test('user types a text', async () => {
    const txt = screen.getByTestId('search')
    userEvent.type(txt, 'hi')

    await waitFor(() => {
      expect(txt).toHaveValue('hi')
    })
  })
})

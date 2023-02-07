import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import StocksList from '../StocksList'
import data from '../../../utils/mockData.json'

let mockData = {
  data,
  page: 1,
  changePage: () => {},
}

describe('Stocks List Component', () => {
  beforeEach(() => {
    render(<StocksList {...mockData} />)
  })

  test('component renders', () => {
    const exp = new RegExp(mockData.data[0].name, 'i')
    const items = screen.getAllByText(exp)
    expect(items.length).toBeGreaterThan(0)
  })

  test('pagination, user clicks next page', async () => {

        const nextBtn = screen.getByRole('next-page');
        fireEvent.click(nextBtn);
        
        await waitFor(() => {
          expect(screen.getAllByRole('stock-row').length).toBeGreaterThan(0);    
        });
        
    });
})

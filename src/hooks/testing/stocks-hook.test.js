import { renderHook, waitFor } from '@testing-library/react'
import { createWrapper, getServer } from '../../utils/test-utils'
import { useSimpleList, useStocks } from '../stocks-hook'
import { server } from '../../utils/setupTests'
import mockData from '../../utils/mockData.json'

const args = { page: 1, type: 'all' }
const simpleMock = ['btc']

describe('Stocks Hook', () => {
  test('useStocks', async () => {
    server.use(getServer('*/coins/*', mockData))
    const { result } = renderHook(() => useStocks(args), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      const res = result.current.data

      expect(result.current.isSuccess).toBe(true)
      expect(res.length).toBeGreaterThan(0)
    })
  })

  test('useSimpleList', async () => {
    server.use(getServer('*/simple/*', simpleMock))
    const { result } = renderHook(() => useSimpleList(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      const res = result.current

      expect(res.isSuccess).toBe(true)
      expect(res.data.length).toBeGreaterThan(0)
    })
  })
})

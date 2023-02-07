import { render } from '@testing-library/react'
import { rest } from 'msw'
import { QueryClient, QueryClientProvider } from 'react-query'

export const getServer = (url = '*', data) =>
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data))
  })

export const handlers = [getServer()]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  })

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  )
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

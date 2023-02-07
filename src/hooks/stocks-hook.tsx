import { TArgs, TStock } from '@/interfaces/IStock'
import { useQuery } from 'react-query'
import * as api from '../api/stock-api'

const useStocks = (args: TArgs) => {
  const { page, type } = args
  const params = ['stocks', type, page]

  return useQuery<TStock[]>(params, () => api.fetchStocks(args))
}

const useSimpleList = () => {
  return useQuery<string[]>(['list'], api.fetchSimpleList)
}

export { useStocks, useSimpleList }

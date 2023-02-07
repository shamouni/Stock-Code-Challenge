import axios from 'axios'
import { TArgs, TStock } from '@/interfaces/IStock'

const client = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
})

const fetchStocks = async (args: TArgs): Promise<TStock[]> => {
  const { page, type } = args
  const endpoint = `coins/markets?vs_currency=usd&per_page=15&page=${page}`

  const { data } = await client.get(endpoint)
  return data
}

const fetchSimpleList = async (): Promise<string[]> => {
  const endpoint = 'simple/supported_vs_currencies'

  const { data } = await client.get(endpoint)
  return data
}

export { fetchStocks, fetchSimpleList }

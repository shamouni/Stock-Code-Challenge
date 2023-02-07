export type TStock = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  total_volume: number
  price_change_percentage_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
}

export type TArgs = {
  page: number
  type: 'all' | 'coin' | 'token'
}

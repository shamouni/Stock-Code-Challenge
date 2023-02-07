import { TStock } from '@/interfaces/IStock'

interface IProps {
  item: TStock
  index: number
}

const Tr = ({ item, index }: IProps) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    total_volume,
    price_change_percentage_24h: p24,
    market_cap_change_percentage_24h: m24,
    circulating_supply,
  } = item

  return (
    <tr role='stock-row'>
      <td>{index + 1}</td>
      <td>
       <div className='flex gap-5 items-center'>
          <img src={image} width={20} height={20} />
          <span>
            {name}
            <div className='text-xs'>
              {symbol}
              </div>
          </span>
       </div>
      </td>
      <td>{current_price}</td>
      <td>{market_cap}</td>
      <td>{total_volume}</td>
      <td className={p24 > 0 ? 'green' : 'red'}>
        {p24}
      </td>
      <td className={p24 > 0 ? 'green' : 'red'}>
        {m24}
      </td>
      <td>{circulating_supply}</td>
    </tr>
  )
}

export default Tr

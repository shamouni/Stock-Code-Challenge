import Tr from './Tr'
import { TStock } from '@/interfaces/IStock'

interface IProps {
  data: TStock[]
}

const Table = (props: IProps) => {
  const { data = [] } = props

  const td_list = [
    '#',
    'Coins',
    'Price',
    '24H',
    '7D',
    'Market Cap',
    'Total Volume',
    'Circulating Supply',
  ]

  return (
    <div className='table-wrapper'>
      <table>
        <thead>
          <tr>
            {td_list.map((i) => (
              <th key={i}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((i, k) => (
            <Tr item={i} index={k} key={k} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

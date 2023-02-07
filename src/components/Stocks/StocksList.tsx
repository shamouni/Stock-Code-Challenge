import { TStock } from '@/interfaces/IStock'
import Pagination from './Pagination'
import Table from './Table'

interface IProps {
  data: TStock[]
  page: number
  changePage: (n: number) => void
}

const StocksList = (props: IProps) => {
  const { data = [], page, changePage } = props

  return (
    <>
      <Table data={data} />
      <Pagination page={page} changePage={changePage} />
    </>
  )
}

export default StocksList

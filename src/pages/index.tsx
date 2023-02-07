import { useState } from 'react'
import Head from '@/components/Layouts/Head'
import StocksList from '@/components/Stocks/StocksList'
import SimpleList from '@/components/SimpleList/SimpleList'
import Filter from '@/components/SimpleList/Filter'
import Loader from '@/components/Stocks/Loader'
import { useSimpleList, useStocks } from '@/hooks/stocks-hook'
import { TArgs } from '@/interfaces/IStock'
import ErrorHandle from '@/components/ErrorHandle/ErrorHandle'

const msg =
  "I implemented this feature technically but it wasn't obvious how to pass this param to the api url"

export default function Home() {
  const [params, setParams] = useState<TArgs>({
    page: 1,
    type: 'all',
  })

  const { data = [], isLoading, isError, error } = useStocks(params)
  const { data: simpleData = [] } = useSimpleList()

  const changePage = (n: number) => {
    setParams((p) => ({ ...p, page: n }))
  }

  const changeType = (t: any) => {
    setParams((p) => ({ ...p, type: t }))
    alert(msg)
  }

  const { page, type } = params

  return (
    <>
      <Head />
      <main className="container">

        <div className="flex gap-10 items-center">
          <SimpleList data={simpleData} />
          <Filter type={type} changeType={changeType} />
        </div>

        {!isLoading && !isError && (
          <StocksList data={data} page={page} changePage={changePage} />
        )}

        {isLoading && <Loader />}

        {isError && <ErrorHandle error={error} />}
        
      </main>
    </>
  )
}

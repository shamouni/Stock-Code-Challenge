import { KeyboardEvent, useEffect, useState } from 'react'
import SearchIcon from './SeachIcon'

interface IProps {
  data: string[]
}

const SimpleList = (props: IProps) => {
  const { data = [] } = props

  const [text, setText] = useState<string>('')
  const [flag, setFlag] = useState<boolean>(false)
  const [list, setList] = useState<string[]>([])

  const hideList = () => setFlag(false)
  const showList = () => setFlag(true)

  const inputClick = (e: { stopPropagation: () => any }) => e.stopPropagation()

  useEffect(() => {
    if (data) {
      setList(data)
    }
  }, [data])

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement
    body.addEventListener('mousedown', hideList)

    return () => {
      body.removeEventListener('mousedown', hideList)
    }
  }, [])

  const lookup = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement

    const regular = new RegExp(value, 'ig')
    let f = data.filter((i) => i.match(regular))

    setList(f)
    setText(value)
  }

  const clickHandle = () => {
    alert("blank link, it's not supposed to be a real link!")
  }

  return (
    <div id="search" className="search">
      <SearchIcon />

      <div className="wrapper">
        <input
          onKeyUp={lookup}
          onFocus={showList}
          onMouseDown={inputClick}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Simple list - Search a sign ..."
          defaultValue={text}
          data-testid="search"
        />

        {flag && (
          <div className="list">
            {list.map(i => (
              <div key={i} onMouseDown={clickHandle}>{i}</div>
            ))}
          </div>
        )}

        {flag && text !== '' && list.length === 0 && (
          <div className="list">
            <div>No results found</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleList

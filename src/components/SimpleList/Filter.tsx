import { SyntheticEvent } from 'react'

interface IProps {
  type: string
  changeType: (t: string) => void
}

const Filter = (props: IProps) => {
  const { type, changeType } = props
  const types = ['all', 'coin', 'token']

  const changeHandle = (e: SyntheticEvent<EventTarget>) => {
    const { value } = e.target as HTMLSelectElement
    changeType(value)
  }

  return (
    <div>
      <label>Type: </label>
      <select value={type} onChange={changeHandle}>
        {types.map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter

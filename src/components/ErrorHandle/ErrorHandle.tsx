interface IProps {
  error: any
}

const ErrorHandle = (props: IProps) => {
  const { error } = props

  return (
    <>
      <h1>Something went wrong</h1>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  )
}

export default ErrorHandle

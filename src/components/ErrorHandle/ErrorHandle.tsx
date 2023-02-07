interface IProps {
  error: any
}

const ErrorHandle = (props: IProps) => {
  const { error } = props

  return (
    <>
      <h1 className="mt-10">Something went wrong!</h1>
      <p className="mb-10">API Error: {error?.message}</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  )
}

export default ErrorHandle

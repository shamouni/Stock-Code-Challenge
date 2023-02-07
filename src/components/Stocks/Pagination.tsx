interface IProps {
  page: number
  changePage: (n: number) => void
}

const Pagination = (props: IProps) => {
  const { page, changePage } = props

  const prevClick = () => changePage(page - 1)
  const nextClick = () => changePage(page + 1)

  return (
    // <div className="pagination">
    //   {page > 1 && <button onClick={prevClick}>{'<'}</button>}
    //   Page: {page}
    //   <button onClick={nextClick}>{'>'}</button>
    // </div>

    <nav className="pagination" aria-label="Page navigation">
      <ul>
        { page > 1 && (
          <li onClick={prevClick} className="prev" role='prev-page'>
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
        )
        }
        <li>{page}</li>
        <li onClick={nextClick} className="next" role='next-page'>
          <span className="sr-only">Next</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const bColor = '#34343b'
const hColor = '#454545'

const Loader = () => {
  return (
    <table className="table-loader">
      <thead>
        {[...Array(15)].map((_, k) => (
          <tr key={k}>
            <th>
              <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                <Skeleton count={1} width={32} height={32} circle={true} />
              </SkeletonTheme>
            </th>
            {[...Array(7)].map((_, k) => (
              <th key={k}>
                <SkeletonTheme baseColor={bColor} highlightColor={hColor}>
                  <Skeleton count={1} height={2} />
                </SkeletonTheme>
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default Loader

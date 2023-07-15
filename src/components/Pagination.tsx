import React, {FC} from 'react'
import {css} from '@emotion/css'
import {ModelPagination} from '@/model/pagination'

interface IPagination {
  data: ModelPagination
  page: number
  perPage: number
  setPage: any
  setPerPage: any
  loading: boolean
}

const Pagination: FC<IPagination> = ({data, page, perPage, setPage, setPerPage, loading}) => {
  console.log(data)
  const nextPage = () => {
    if (data.hasNextPage) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  console.log(typeof perPage)

  return (
    <>
      {!loading && data !== undefined && (
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <select
            value={String(perPage)}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              setPerPage(parseInt(e.target.value))
            }
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>

          <button
            type='button'
            onClick={() => prevPage()}
            className={css`
              --size: 32px;
              --margin: 6px;
              margin: 0 var(--margin);
              border-radius: 6px;
              background: rgba(48, 57, 73, 1);
              max-width: auto;
              min-width: 100px;
              height: var(--size);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              padding: 0 6px;
              transition: 0.3s all ease-in-out;
              &:hover {
                background: black;
              }
            `}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            type='button'
            onClick={() => nextPage()}
            className={css`
              --size: 32px;
              --margin: 6px;
              margin: 0 var(--margin);
              border-radius: 6px;
              background: rgba(48, 57, 73, 1);
              max-width: auto;
              min-width: 100px;
              height: var(--size);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              padding: 0 6px;
              transition: 0.3s all ease-in-out;
              &:hover {
                background: black;
              }
            `}
            disabled={!data?.hasNextPage}
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default Pagination

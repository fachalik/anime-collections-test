import React from 'react'
import {useQuery} from '@apollo/client'
import {LoadAnime} from '@/GraphQl/Queries'
import debounce from 'lodash.debounce'
import AnimeList from '@/components/AnimeList'
import Pagination from '@/components/Pagination'

const AnimeListPage = () => {
  const [search, setSearch] = React.useState<string | null>(null)
  const [page, setPage] = React.useState<number>(1)
  const [perPage, setPerPage] = React.useState<number>(10)

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e) setSearch(null)
    if (e.target.value === '') {
      console.log('here')
      setSearch(null)
    }
    setSearch(e?.target?.value)
  }

  const debouncehandleSetSearch = debounce(handleSetSearch, 500)

  const {loading, data} = useQuery(LoadAnime, {
    variables: {
      search: search !== '' ? search : null,
      page,
      perPage,
    },
  })
  const {media, pageInfo} = data?.Page ?? {}

  console.log('search', search)

  console.log('page', page)

  return (
    <>
      <input
        type='text'
        onChange={debouncehandleSetSearch}
        className='form-control search'
        placeholder='Search anime ...'
      />
      <AnimeList media={media} loading={loading} />
      <Pagination
        data={pageInfo}
        setPage={setPage}
        setPerPage={setPerPage}
        perPage={perPage}
        page={page}
        loading={loading}
      />
    </>
  )
}

export default AnimeListPage

import React from 'react'
import {useLocation} from 'react-router-dom'

import {useQuery} from '@apollo/client'
import {LoadAnimeById} from '@/GraphQl/Queries'
import DetailAnime from '@/components/DetailAnime'

const AnimeDetailPage = () => {
  const location = useLocation()

  const {state} = location

  const {loading, data} = useQuery(LoadAnimeById, {
    variables: {
      id: state,
    },
  })
  const {Media: media} = data ?? {}

  return <div>{loading ? <p>loading ...</p> : <DetailAnime data={media} />}</div>
}

export default AnimeDetailPage

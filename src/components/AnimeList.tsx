import React, {FC} from 'react'
import {ArrAnimeData, AnimeData} from '@/model/animeList'
import Wrapper from '@/components/Wrapper'
import BoxItemAnime from '@/components/BoxItemAnime'

interface IAnimeList {
  media?: ArrAnimeData
  loading: boolean
}

const AnimeList: FC<IAnimeList> = ({media, loading}) => {
  // console.log()
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Wrapper>
          {media?.map((item: AnimeData, idx: number) => <BoxItemAnime key={idx} data={item} />)}
        </Wrapper>
      )}
    </>
  )
}

export default AnimeList

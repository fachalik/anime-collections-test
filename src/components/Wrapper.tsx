import React, {FC} from 'react'
import {css} from '@emotion/css'
import {AnimeData} from '@/model/animeList'
import {truncate} from '@/lib/utilitys'

interface IWrapper {
  children: JSX.Element
}

const Wrapper: FC<IWrapper> = ({children}) => {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        padding: 5px;
      `}
    >
      {children}
    </div>
  )
}

export default Wrapper

import React, {FC} from 'react'
import {css} from '@emotion/css'
import {AnimeData} from '@/model/animeList'
import {truncate} from '@/lib/utilitys'
import {useNavigate} from 'react-router-dom'

interface IAnimeData {
  data: AnimeData
}

const BoxItemAnime: FC<IAnimeData> = ({data}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/detail-anime', {state: data.id})}
      className={css`
        cursor: pointer;
        position: relative;
        border-radius: 10px;
        margin: 10px;
        height: 263.086 px;
        width: 185.664px;
        background-color: white;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 100%;
          position: relative;
        `}
      >
        <div
          className={css`
            width: 100%;
            height: 100%;
            overflow: hidden;
            transition: 0.5s all ease-in-out;
            border-radius: 10px;
          `}
        >
          <img
            src={data.coverImage.extraLarge}
            className={css`
              width: 100%;
              height: 100%;
              transition: 0.5s all ease-in-out;
              position: relative;
              transform: scale(1.1);

              &:hover {
                transform: scale(1.5);
              }
            `}
          />
          <div
            className={css`
              position: absolute;
              bottom: 0px;
              width: 100%;
              height: 70px;
              background: linear-gradient(rgba(48, 57, 73, 0.9), rgba(48, 57, 73, 0.9));
              border-radius: 0px 0px 10px 10px;
              display: flex;
              flex-direction: column;
            `}
          >
            <p
              className={css`
                font-size: 14px;
                margin: 10px 10px 7px 10px;
                text-align: start;
              `}
            >
              {truncate(data.title.romaji, 20)}
            </p>
            <div
              className={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <p
                className={css`
                  font-size: 14px;
                  margin: 0px 10px 10px 10px;
                  text-align: start;
                `}
              >
                {data.format}
              </p>
              <p
                className={css`
                  font-size: 14px;
                  margin: 0px 10px 10px 10px;
                  text-align: start;
                `}
              >
                {data.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxItemAnime

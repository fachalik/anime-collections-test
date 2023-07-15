import React, {FC} from 'react'
import {ModelDetailAnime} from '@/model/detailAnime'
import {css} from '@emotion/css'
import parse from 'html-react-parser'
import {Icon} from '@iconify/react'
import {useNavigate} from 'react-router-dom'
import {truncate} from '@/lib/utilitys'

interface IDetailAnime {
  data: ModelDetailAnime
}

interface ITitle {
  title: string
  value: string | number
}
const Title: FC<ITitle> = ({title, value}) => {
  return (
    <p
      className={css`
        font-size: 24px;
      `}
    >
      <span
        className={css`
          font-weight: 400;
          text-transform: uppercase;
        `}
      >
        {title}
      </span>
      <span
        className={css`
          font-weight: 700;
        `}
      >
        {` ${value}`}
      </span>
    </p>
  )
}

const DetailAnime: FC<IDetailAnime> = ({data}) => {
  const navigate = useNavigate()
  const genre = data.genres.join(';  ')
  return (
    <div
      className={css`
        width: 98vw;
        height: 98vh;
        background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(${data.bannerImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 1rem;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
          `}
        >
          <div
            className={css`
              padding: 1rem;
              text-align: start;
            `}
          >
            <div
              onClick={() => navigate(-1)}
              className={css`
                cursor: pointer;
                display: flex;
                justify-content: start;
                align-items: center;
              `}
            >
              <Icon icon='ic:round-arrow-back' style={{fontSize: '24px'}} />
              <h4>Back</h4>
            </div>
            <h4>{genre}</h4>
            <h1>{data.title.romaji}</h1>
          </div>
          <div
            className={css`
              padding: 1rem;
              text-align: start;
            `}
          >
            <Title title='episodes' value={data.episodes} />
            <Title title='score' value={data.meanScore} />
            <Title title='popularity' value={`# ${data.popularity}`} />
          </div>
        </div>
        <div
          className={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <div
            className={css`
              padding: 1rem;
              text-align: start;
            `}
          >
            <div
              className={css`
                width: 90%;
                height: 300px;
                background: url(${data.coverImage.extraLarge});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                padding: 1rem;
                border: 5px solid rgba(255, 255, 255, 0.7);
                border-radius: 14px;
              `}
            />
            <h4
              className={css`
                font-size: 12.5px;
              `}
            >
              {truncate(data.description, 1000)}
            </h4>
            <button
              type='button'
              className={css`
                border-radius: 6px;
                background: rgba(48, 57, 73, 1);
                min-width: 150px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                padding: 20px;
                transition: 0.3s all ease-in-out;
                font-weight: 700;
                &:hover {
                  background: black;
                }
              `}
            >
              Add to collection
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailAnime

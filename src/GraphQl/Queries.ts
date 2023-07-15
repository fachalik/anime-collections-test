import {gql} from '@apollo/client'

export const LoadAnime = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search, type: ANIME, isAdult: false) {
        id
        status
        genres
        meanScore
        format
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          english
        }
      }
    }
  }
`

export const LoadAnimeById = gql`
  query ($id: Int) {
    media(id: $id, type: ANIME, isAdult: false) {
      id
      status
      genres
      meanScore
      format
      coverImage {
        extraLarge
        large
        medium
        color
      }
      title {
        romaji
        english
      }
    }
  }
`

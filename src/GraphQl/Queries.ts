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
    Media(id: $id, type: ANIME, isAdult: false) {
      id
      status
      format
      bannerImage
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
      popularity
      description
      episodes
      genres
      meanScore
      studios {
        edges {
          id
        }
      }
    }
  }
`

export const LoadStudio = gql`
  query ($id: Int) {
    Studio(id: $id) {
      id
      name
    }
  }
`

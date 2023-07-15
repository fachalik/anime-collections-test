import React from 'react'
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import {AnimeListPage, AnimeDetailPage, CollectionListPage, CollectionDetailPage} from '@/pages'

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'

const link = from([new HttpLink({uri: 'https://graphql.anilist.co'})])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <>
            <Route path={`/`} element={<AnimeListPage />} />
            <Route path={`/detail-anime`} element={<AnimeDetailPage />} />
            <Route path={`/collection`} element={<CollectionListPage />} />
            <Route path={`/collection/detail`} element={<CollectionDetailPage />} />
            <Route path='*' element={<Navigate to={`/`} />} />
          </>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

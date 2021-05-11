import React from 'react'
import GlobalStyles from '../../styles/styles.global'
import Header from '../components/Header/Header'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default App

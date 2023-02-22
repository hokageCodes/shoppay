import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"
import store from '../store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Head from 'next/head'

let persistor = persistStore(store)

export default function App({ session, Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shop Pay- Readymade Dresses Online</title>
        <meta name="fashion store online ready made dresses" content="online fashion store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SessionProvider session={session}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps}/>
            </PersistGate>
          </Provider>
        </SessionProvider>
    </>
  )
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>xense | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        this is dope
      </div>

    </div>
  )
}

export default Home

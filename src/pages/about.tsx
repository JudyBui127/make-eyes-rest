import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
     <Head>
        <title>About</title>
        <link rel="icon" href="/eye.ico" />
      </Head>
      <div>
        Hello About
      </div>
    </>
    
  )
}

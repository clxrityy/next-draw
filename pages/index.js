import Main from '@/components/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT DRAW</title>
        <meta name="description" content="A building game with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen flex'>
        <Main />
      </div>
    </>
  )
}

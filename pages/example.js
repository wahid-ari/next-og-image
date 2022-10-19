import Head from 'next/head'
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import Code from '../components/Code';
import ExampleSidebar from '../components/ExampleSidebar';
import Image from 'next/image';
import { useState } from "react"

export default function Example() {
  const [isLoading, setLoading] = useState(true)
  const linkClassName = "text-sky-500 hover:text-sky-600 transition-all block mb-1"
  return (
    <div>
      <Head>
        <title>Next OG Image Example</title>
        <meta name="description" content="Next OG Image Example" />
        <meta
          property="og:image"
          content={`${process.env.API_URL}/api/dynamic-image?username=vercel`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <div className="sm:flex sm:flex-wrap min-h-screen max-w-5xl mx-auto">

          <ExampleSidebar />

          <div className="sm:w-4/6 px-4 mx-auto pt-4">
            <h1 className="dark:text-white text-2xl font-semibold">Next OG Dynamic Image Example</h1>
            <a href={`${process.env.API_URL}/api/dynamic-image?username=vercel`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image?username=vercel</a>
            <div className="mt-4">
              <a href={`https://twitter.com/intent/tweet?url=${process.env.API_URL}/example&text=try+og+image%0A%0A`} target="_blank" rel="noreferrer noopener"
                className="bg-blue-500 hover:bg-blue-600 transition-all text-white text-sm font-semibold py-1 px-2 rounded-md">
                Try Tweet this page
              </a>
            </div>
            <div className="mt-4 mb-8">
              <div className="relative h-60 w-auto sm:h-72 lg:h-[22rem] lg:w-full rounded border">
                <Image
                  alt={'Images'}
                  src={`${process.env.API_URL}/api/dynamic-image?username=vercel`}
                  layout="fill"
                  className={`duration-700 ease-in-out group-hover:opacity-80 rounded
                ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
              <Code name='pages head' code={`import Head from 'next/head'
              
<Head>
  <title>Next OG Image Example</title>
  <meta name="description" content="Next OG Image Example" />
  <meta property="og:image" content={${process.env.API_URL}/api/dynamic-image?username=vercel} />
  <link rel="icon" href="/favicon.ico" />
</Head>`} />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
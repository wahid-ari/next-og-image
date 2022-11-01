import Head from 'next/head'
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';

const linkClassName = "text-sky-500 hover:text-sky-600 transition-all block mb-1"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Next OG Image</title>
        <meta name="title" content="Next OG Image"></meta>
        <meta name="description" content="Next OG Image" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Next OG Image" />
        <meta property="og:description" content="Next OG Image" />
        <meta property="og:url" content={`${process.env.API_URL}`} />
        <meta property="og:image" content={`${process.env.API_URL}/api/bgjar?title=Next OG Image&bg=hexagon`} />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Next OG Image" />
        <meta property="twitter:description" content="Next OG Image" />
        <meta property="twitter:url" content={`${process.env.API_URL}`} />
        <meta property="twitter:image" content={`${process.env.API_URL}/api/bgjar?title=Next OG Image&bg=hexagon`} />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <div className="max-w-5xl mx-auto p-4">

          <h1 className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            Next OG Image
          </h1>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">Default</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, using title and bg as parameter</p>
            <a href={`${process.env.API_URL}/api/og`} target="_blank" rel="noreferrer" className={linkClassName}>/api/og <span className="text-red-500">49.5 kB transferred 75.0 kB resources Finish: 221 ms</span></a>
            <a href={`${process.env.API_URL}/api/og?bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/og?bg=dark <span className="text-red-500">46.6 kB transferred 72.1 kB resources Finish: 194 ms</span></a>
            <a href={`${process.env.API_URL}/api/og?title=Blog Title A`} target="_blank" rel="noreferrer" className={linkClassName}>/api/og?title=Blog Title A <span className="text-red-500">47.3 kB transferred 72.7 kB resources Finish: 227 ms</span></a>
            <a href={`${process.env.API_URL}/api/og?title=Blog Title A&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/og?title=Blog Title A&bg=dark <span className="text-red-500">44.9 kB transferred 70.3 kB resources Finish: 266 ms</span></a>
            <a href={`${process.env.API_URL}/api/og?bg=gradient`} target="_blank" rel="noreferrer" className={linkClassName}>/api/og?bg=gradient <span className="text-red-500">279 kB transferred 305 kB resources Finish: 836 ms</span></a>
            <a href={`${process.env.API_URL}/api/og?bg=conic`} target="_blank" rel="noreferrer" className={linkClassName}>/api/og?bg=conic <span className="text-red-500">137 kB transferred 163 kB resources Finish: 539 ms</span></a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">Dynamic Image</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, your post image is made up of an avatar user image and the URL of the user’s profile. The image is fetched remotely based on the username passed as a parameter.</p>
            <a href={`${process.env.API_URL}/api/dynamic-image`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image</a>
            <a href={`${process.env.API_URL}/api/dynamic-image?bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image?bg=dark</a>
            <a href={`${process.env.API_URL}/api/dynamic-image?username=vercel`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image?username=vercel</a>
            <a href={`${process.env.API_URL}/api/dynamic-image?username=vercel&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image?username=vercel&bg=dark</a>
            <a href={`${process.env.API_URL}/api/dynamic-image?username=facebook`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image?username=facebook</a>
            <a href={`${process.env.API_URL}/api/dynamic-image?username=facebook&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/dynamic-image?username=facebook&bg=dark</a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">Title</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, your post image is made up of a static SVG logo and the post title. You will pass the post title as a parameter</p>
            <a href={`${process.env.API_URL}/api/blog`} target="_blank" rel="noreferrer" className={linkClassName}>/api/blog</a>
            <a href={`${process.env.API_URL}/api/blog?bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/blog?bg=dark</a>
            <a href={`${process.env.API_URL}/api/blog?title=Blog Title A`} target="_blank" rel="noreferrer" className={linkClassName}>/api/blog?title=Blog Title A</a>
            <a href={`${process.env.API_URL}/api/blog?title=Blog Title A&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/blog?title=Blog Title A&bg=dark</a>
            <a href={`${process.env.API_URL}/api/blog?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/blog?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=dark</a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">Tailwind</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, you use Tailwind CSS to style the content for the OG image using a template provided by Tailwind.</p>
            <a href={`${process.env.API_URL}/api/tailwind`} target="_blank" rel="noreferrer" className={linkClassName}>/api/tailwind</a>
            <a href={`${process.env.API_URL}/api/tailwind?bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/tailwind?bg=dark</a>
            <a href={`${process.env.API_URL}/api/tailwind?title=Blog Title A`} target="_blank" rel="noreferrer" className={linkClassName}>/api/tailwind?title=Blog Title A</a>
            <a href={`${process.env.API_URL}/api/tailwind?title=Blog Title A&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/tailwind?title=Blog Title A&bg=dark</a>
            <a href={`${process.env.API_URL}/api/tailwind?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/tailwind?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=dark</a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">Gradient</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, we use gradient background image</p>
            <a href={`${process.env.API_URL}/api/gradient`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient</a>
            <a href={`${process.env.API_URL}/api/gradient?bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient?bg=dark</a>
            <a href={`${process.env.API_URL}/api/gradient?bg=sunset`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient?bg=sunset</a>
            <a href={`${process.env.API_URL}/api/gradient?bg=politics`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient?bg=politics</a>
            <a href={`${process.env.API_URL}/api/gradient?bg=emerald`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient?bg=emerald</a>
            <a href={`${process.env.API_URL}/api/gradient?title=My Title Blog Post`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient?title=My Title Blog Post</a>
            <a href={`${process.env.API_URL}/api/gradient?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer`} target="_blank" rel="noreferrer" className={linkClassName}>/api/gradient?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer</a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">bgjar</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, we use background image from https://bgjar.com/</p>
            <a href={`${process.env.API_URL}/api/bgjar`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar</a>
            <a href={`${process.env.API_URL}/api/bgjar?bg=circuit`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?bg=circuit</a>
            <a href={`${process.env.API_URL}/api/bgjar?bg=contour`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?bg=contour</a>
            <a href={`${process.env.API_URL}/api/bgjar?bg=hexagon`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?bg=hexagon</a>
            <a href={`${process.env.API_URL}/api/bgjar?title=My Title Blog Post&bg=hexagon`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?title=My Title Blog Post&bg=hexagon</a>
            <a href={`${process.env.API_URL}/api/bgjar?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=hexagon`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=hexagon</a>
            <a href={`${process.env.API_URL}/api/bgjar?bg=overlay`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?bg=overlay</a>
            <a href={`${process.env.API_URL}/api/bgjar?bg=sprinkle`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?bg=sprinkle</a>
            <a href={`${process.env.API_URL}/api/bgjar?bg=rect`} target="_blank" rel="noreferrer" className={linkClassName}>/api/bgjar?bg=rect</a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">coolbackgrounds</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, we use background image from https://coolbackgrounds.io/</p>
            <a href={`${process.env.API_URL}/api/cool`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool</a>
            <a href={`${process.env.API_URL}/api/cool?bg=dark`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool?bg=dark</a>
            <a href={`${process.env.API_URL}/api/cool?bg=gray`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool?bg=gray</a>
            <a href={`${process.env.API_URL}/api/cool?bg=ocean`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool?bg=ocean</a>
            <a href={`${process.env.API_URL}/api/cool?bg=sunset`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool?bg=sunset</a>
            <a href={`${process.env.API_URL}/api/cool?title=My Title Blog Post&bg=ocean`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool?title=My Title Blog Post&bg=ocean</a>
            <a href={`${process.env.API_URL}/api/cool?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=ocean`} target="_blank" rel="noreferrer" className={linkClassName}>/api/cool?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=ocean</a>
          </div>

          <div className="mb-6">
            <h3 className="text-neutral-700 dark:text-neutral-100 font-semibold text-lg mb-1">pattern.monster</h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-sm mb-2">In this example, we use background image from https://pattern.monster/</p>
            <a href={`${process.env.API_URL}/api/pattern`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern</a>
            <a href={`${process.env.API_URL}/api/pattern?bg=eyes`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern?bg=eyes</a>
            <a href={`${process.env.API_URL}/api/pattern?bg=hexagon`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern?bg=hexagon</a>
            <a href={`${process.env.API_URL}/api/pattern?bg=japanese`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern?bg=japanese</a>
            <a href={`${process.env.API_URL}/api/pattern?bg=jigsaw`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern?bg=jigsaw</a>
            <a href={`${process.env.API_URL}/api/pattern?title=My Title Blog Post&bg=jigsaw`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern?title=My Title Blog Post&bg=jigsaw</a>
            <a href={`${process.env.API_URL}/api/pattern?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=jigsaw`} target="_blank" rel="noreferrer" className={linkClassName}>/api/pattern?title=Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer&bg=jigsaw</a>
          </div>

        </div>
      </main>
    </div>
  )
}

import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = req.nextUrl
    const bg = searchParams.get('bg')
    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const titleLength = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title'
    const title = titleLength.length == 100 ? titleLength + '...' : titleLength

    if (bg == 'dark') {
      return new ImageResponse(
        (
          <div
            style={{
              color: 'white',
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              backgroundColor: '#000',
              backgroundImage: 'radial-gradient(circle at 25px 25px, dimgray 1%, transparent 0%), radial-gradient(circle at 75px 75px, dimgray 1%, transparent 0%)',
              backgroundSize: '100px 100px'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="avatar"
              width="256"
              src={`${process.env.API_URL}/vercel.png`}
              style={{
                borderRadius: 128,
              }}
            />
            <div tw="bg-transparent w-full flex flex-wrap items-center justify-between mt-8 px-24 py-8">
              <h2 tw="flex flex-col text-4xl font-bold tracking-tight">
                <span tw="text-gray-200 mb-2">Blog</span>
                <span tw="text-indigo-600 text-3xl">{title}</span>
              </h2>
              <a
                href="#"
                tw="rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white"
              >
                Read More
              </a>
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    return new ImageResponse(
      (
        <div
          style={{
            color: 'black',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: 'white',
            backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px'
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="avatar"
            width="256"
            src={`${process.env.API_URL}/vercel.png`}
            style={{
              borderRadius: 128,
            }}
          />
          <div tw="bg-transparent w-full flex flex-wrap items-center justify-between mt-8 px-24 py-8">
            <h2 tw="flex flex-col text-4xl font-bold tracking-tight">
              <span tw="text-gray-800 mb-2">Blog</span>
              <span tw="text-indigo-600 text-3xl">{title}</span>
            </h2>
            <a
              href="#"
              tw="rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white"
            >
              Read More
            </a>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    )
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
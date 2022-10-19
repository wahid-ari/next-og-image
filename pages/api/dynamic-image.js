import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = req.nextUrl
    const username = searchParams.get('username')
    const bg = searchParams.get('bg')

    if (!username && bg == 'dark') {
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 40,
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
            <p>visit this url with ?username=</p>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    if (!username) {
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 40,
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
            <p>visit this url with ?username=</p>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    if (bg == 'dark') {
      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 60,
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
              src={`https://github.com/${username}.png`}
              style={{
                borderRadius: 128,
              }}
            />
            <p>github.com/{username}</p>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 60,
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
            src={`https://github.com/${username}.png`}
            style={{
              borderRadius: 128,
            }}
          />
          <p>github.com/{username}</p>
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
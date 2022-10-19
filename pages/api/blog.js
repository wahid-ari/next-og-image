import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const titleClassName = {
  fontSize: 40,
  padding: '5px 40px',
  width: 'auto',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  color: 'transparent',
}

const blogClassName = {
  fontSize: 55,
  display: 'flex',
  marginTop: '50px',
  padding: '5px 40px',
  width: 'auto',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  color: 'transparent',
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
            <div style={blogClassName} >
              BLOG
            </div>
            <div style={titleClassName} >
              {title}
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
            src={`${process.env.API_URL}/vercel.png`}
            style={{
              borderRadius: 128,
            }}
          />
          <div style={blogClassName} >
            BLOG
          </div>
          <div style={titleClassName} >
            {title}
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
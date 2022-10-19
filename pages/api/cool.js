import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const wrapperClassName = {
  fontSize: 60,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  position: 'relative'
}

const blogClassName = {
  fontSize: 60,
  display: 'flex',
  marginTop: '40px',
  padding: '5px 40px',
  width: 'auto',
  textAlign: 'center',
  backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  color: 'transparent',
}

const titleClassName = {
  fontSize: 38,
  padding: '5px 40px',
  width: 'auto',
  textAlign: 'center',
  color: '#f1f1f1',
}

// https://coolbackgrounds.io/
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
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/cool/dark.png`}
              style={{
                position: 'absolute'
              }}
            />
            <div style={blogClassName}>
              BLOG
            </div>
            <div style={titleClassName}>
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }
    
    if (bg == 'gray') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/cool/gray.png`}
              style={{
                position: 'absolute'
              }}
            />
            <div style={blogClassName}>
              BLOG
            </div>
            <div style={titleClassName}>
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    if (bg == 'ocean') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/cool/ocean.png`}
              style={{
                position: 'absolute'
              }}
            />
            <div style={blogClassName}>
              BLOG
            </div>
            <div style={titleClassName}>
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }
    
    if (bg == 'sunset') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/cool/sunset.png`}
              style={{
                position: 'absolute'
              }}
            />
            <div style={blogClassName}>
              BLOG
            </div>
            <div style={titleClassName}>
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    return new ImageResponse(
      (
        <div style={wrapperClassName}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="bg" width="100%" height="100%"
            src={`${process.env.API_URL}/cool/cool.png`}
            style={{
              position: 'absolute'
            }}
          />
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
          <div style={titleClassName}>
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
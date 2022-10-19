import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const wrapperClassName = {
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
  fontWeight: 700,
}

const blogClassName = {
  fontSize: 60,
  fontWeight: 700,
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

// https://patternbackgrounds.io/
export default async function handler(req) {
  try {
    const { searchParams } = req.nextUrl
    const bg = searchParams.get('bg')
    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const titleLength = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title'
    const title = titleLength.length == 100 ? titleLength + '...' : titleLength

    if (bg == 'eyes') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/pattern/eyes.png`}
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
    
    if (bg == 'hexagon') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/pattern/hexagon.png`}
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

    if (bg == 'japanese') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/pattern/japanese.png`}
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
    
    if (bg == 'jigsaw') {
      return new ImageResponse(
        (
          <div style={wrapperClassName}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/pattern/jigsaw.png`}
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
            src={`${process.env.API_URL}/pattern/pattern.png`}
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
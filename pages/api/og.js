import { ImageResponse } from '@vercel/og'
// import svg from "../../public/svg/a.svg"

export const config = {
  runtime: 'experimental-edge',
}

const titleClassName = {
  fontSize: 50,
  padding: '5px 40px',
  width: 'auto',
  textAlign: 'center',
  color: '#f1f1f1',
  fontWeight: 800
}

const titleClassNameDark = {
  fontSize: 50,
  padding: '5px 40px',
  width: 'auto',
  textAlign: 'center',
  color: '#171717',
  fontWeight: 700
}

export default async function handler(req) {
  try {
    const { searchParams } = req.nextUrl
    const bg = searchParams.get('bg')
    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const titleLength = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My Default Title'
    const title = titleLength.length == 100 ? titleLength + '...' : titleLength

    if (bg == 'a') {
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
              position: 'relative',
              backgroundColor: '#000'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/svg/a.jpg`}
              style={{
                position: 'absolute'
              }}
            />
            <div style={titleClassName} >
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }
    
    if (bg == 'b') {
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
              position: 'relative',
              backgroundColor: '#000'
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="bg" width="100%" height="100%"
              src={`${process.env.API_URL}/svg/b.jpg`}
              style={{
                position: 'absolute'
              }}
            />
            <div style={titleClassName} >
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    if (bg == 'conic') {
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
              position: 'relative',
              backgroundColor: '#000'
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                left: -100,
                bottom: -100,
                background: '#42A8A8',
                filter: 'blur(150px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                top: -100,
                right: -100,
                background: '#E97810',
                filter: 'blur(150px)',
              }}
            />
            <div style={titleClassName} >
              {title}
            </div>
          </div>
        ),
        { width: 1200, height: 630 }
      )
    }

    if (bg == 'gradient') {
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
              position: 'relative',
              backgroundColor: '#000'
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                bottom: -100,
                left: 0,
                background: '#705BEC',
                filter: 'blur(145px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                bottom: -30,
                right: -30,
                background: '#E97810',
                filter: 'blur(120px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                right: -100,
                top: -100,
                background: '#42A8A8',
                filter: 'blur(145px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '350px',
                height: '350px',
                left: 0,
                top: 0,
                background: '#542116',
                filter: 'blur(145px)',
              }}
            />
            <div style={titleClassName} >
              {title}
            </div>
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
              color: 'white',
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              backgroundColor: '#000',
              backgroundImage: 'radial-gradient(circle at 25px 25px, dimgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, dimgray 1%, transparent 1%)',
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
                marginBottom: 50
              }}
            />
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
              marginBottom: 50
            }}
          />
          <div style={titleClassNameDark} >
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
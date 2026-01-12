import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const alt = 'Andi Putra Fathahillah - Web Developer'
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: '#000000', // Changed to black to match dark theme preference
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ fontWeight: 'bold', marginBottom: 20 }}>Andi Putra Fathahillah</div>
                <div style={{ fontSize: 32, opacity: 0.8 }}>Web Developer Portfolio</div>
            </div>
        ),
        {
            ...size,
        }
    )
}

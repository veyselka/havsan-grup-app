import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Havsan Grup - Robotik, AI & Enerji Çözümleri';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 'bold' }}>HAVSAN</div>
          <div
            style={{
              width: '4px',
              height: '80px',
              background: 'white',
            }}
          />
          <div style={{ fontSize: 96, fontWeight: 300 }}>GRUP</div>
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            opacity: 0.9,
            textAlign: 'center',
          }}
        >
          Robotik Kodlama • AI & Yazılım • Enerji Çözümleri
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

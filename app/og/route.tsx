import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Multidisciplinar'
  return new ImageResponse(
    (
      <div tw="relative flex h-screen w-full flex-col items-center justify-center bg-black text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            position: 'absolute',
            top: '25%',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.1,
          }}
        >
          <path d="M12 6v12" />
          <path d="M17.196 9 6.804 15" />
          <path d="m6.804 9 10.392 6" />
        </svg>
        <h1 tw="text-wrap p-12 text-center text-6xl font-semibold tracking-tighter z-10">{title}</h1>
        <p tw="font-mono text-2xl z-10">Multidisciplina</p>
      </div>


    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

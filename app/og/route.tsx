import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Multidisciplinar'
  return new ImageResponse(
    (
      <div tw="relative flex h-screen w-full flex-col items-center justify-center bg-black text-white">
        <h1 tw="text-wrap p-12 text-center text-2xl font-semibold tracking-tighter z-10">{title}</h1>
        <p tw="font-mono text-2xl z-10">Multidisciplina</p>
      </div>


    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Multidisciplinar'
  return new ImageResponse(
    (
      <div tw="flex flex-col h-screen">
        <div tw="mx-auto flex h-full w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 6v12" />
            <path d="M17.196 9 6.804 15" />
            <path d="m6.804 9 10.392 6" />
          </svg>
          <div>
            <h1 tw="text-wrap p-12 text-5xl font-semibold tracking-tighter">{title}</h1>
          </div>
        </div>
        <p tw="z-10 font-mono text-2xl p-4 text-center">Multidisciplina</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

import { getBlogPosts } from 'app/projetos/utils'

export const baseUrl = 'https://multidisciplinar.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/projetos/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/projetos'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}

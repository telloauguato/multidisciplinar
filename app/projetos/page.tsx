import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projetos',
  description: 'Educação e Ação.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projetos Multidisciplinar</h1>
      <BlogPosts />
    </section>
  )
}

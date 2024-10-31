import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Multidisciplinar
      </h1>
      <p className="mb-4">
        A Multidisciplinar é um ambiente digital criado para facilitar a publicação, compartilhamento e execução de projetos educacionais de aplicação prática em sala de aula. Focada em promover uma educação mais ativa e integrada, Multidisciplinar oferece aos professores uma variedade de projetos que conectam diversas áreas do conhecimento, permitindo aos alunos vivenciar uma experiência de aprendizado colaborativa e prática.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

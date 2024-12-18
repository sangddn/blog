import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sang Doan
      </h1>
      <p className="mb-4">
        {`Currently life mostly consists of coding, calligraphy and CoDM. Based in Bay Area, working on consumer AI projects and figuring it out as I go.`}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400">
        {`I offer full-stack development services to founders and startups. See my `}
        <a href="https://sangdoan.com/" target="_blank" className="underline">
          portfolio
        </a>
        {`.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

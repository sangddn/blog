import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Sang’s Blog',
  description: 'Notes and random thoughts.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">All Posts</h1>
      <BlogPosts />
    </section>
  )
}

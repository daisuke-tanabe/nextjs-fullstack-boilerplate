type Post = {
  id: string;
  title: string;
  content: string;
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const post = (await fetch(`https://api.vercel.app/blog/${id}`, {
    next: {
      tags: [`posts/${id}`],
      revalidate: 600,
    },
    cache: 'force-cache',
  }).then((res) => res.json())) as Post;
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}

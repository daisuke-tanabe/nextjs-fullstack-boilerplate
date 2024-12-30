type Post = {
  id: string;
  title: string;
  content: string;
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://api.vercel.app/blog/${id}`, { cache: 'force-cache' });
  const post = (await response.json()) as Post;

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}

import Container from '@mui/material/Container';

type Post = {
  id: string;
  title: string;
  body: string;
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/posts/${id}`, { cache: 'force-cache' });
  const post = (await response.json()) as Post;

  return (
    <Container component="main">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Container>
  );
}

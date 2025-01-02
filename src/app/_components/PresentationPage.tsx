import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export async function PresentationPage() {
  const response = await fetch('https://dummyjson.com/posts?limit=10', { cache: 'force-cache' });
  const { posts } = (await response.json()) as { posts: { id: string; title: string; body: string }[] };

  return (
    <Container component="main">
      <Grid container spacing={3}>
        {posts.map(({ id, title, body }) => (
          <Grid key={id} size={4} sx={{ display: 'flex' }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2">{body}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={NextLink} href={`/posts/${id}`}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

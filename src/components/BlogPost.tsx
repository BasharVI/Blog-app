import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Post {
  userId: number
  id: number
  title: String
  body: String

}

const BlogPost = () => {
  const [posts, setPost] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setPost(json))
  }, [])

  return (

    <>
      {posts ? posts.map((post) => {
        <Paper elevation={12} style={{ marginTop: "10px" }} >
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Comments</Button>
          </CardActions>
        </Paper>
      }) : null}

      <Paper elevation={12} >
        <CardContent>
          <Typography variant="h5" component="div">
            {posts[0].title}
          </Typography>
          <Typography variant="body2">
            {posts[0].body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comments</Button>
        </CardActions>
      </Paper>
      <Paper elevation={12} >
        <CardContent>
          <Typography variant="h5" component="div">
            {posts[1].title}
          </Typography>
          <Typography variant="body2">
            {posts[2].body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comments</Button>
        </CardActions>
      </Paper>
    </>

  )

}

export default BlogPost
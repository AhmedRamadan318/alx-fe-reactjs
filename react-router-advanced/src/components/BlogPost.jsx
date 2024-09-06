
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return <div>Displaying blog post with ID: {id}</div>;
};

export default BlogPost;

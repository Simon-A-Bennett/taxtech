import { useLoaderData } from 'react-router-dom';
import { postsLoader } from '../api';

import Posts from '../components/Posts';

const BlogPosts = () => {
  const posts = useLoaderData();

  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default BlogPosts;

export function loader() {
  return postsLoader();
}

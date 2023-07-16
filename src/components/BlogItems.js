import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

import Post from '../pages/Post';
import Button from './Button';

const BlogItems = ({ post, setPost }) => {
  const replace = post.title.replaceAll(' ', '-');

  const getPost = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/posts?id=${post?.id}`
      );
      const data = await response.json();
      setPost(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const onSetPost = () => {
    getPost();
    setPost(post);
  };

  return (
    <div>
      <div className='posts'>
        <div>
          <h2>{post.title}</h2>
        </div>
        <div>
          <p>
            <em>{post.body}</em>
          </p>
        </div>
        <Link onClick={onSetPost} to={`/post`}>
          <Button>View post</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItems;

export const postsLoader = async () => {
  const response = await fetch(`http://localhost:3000/posts`);

  if (!response.ok) {
    throw { message: 'Failed to fetch posts.', status: 500 };
  }

  return response.json();
};

export const postLoader = async (id) => {
  const response = await fetch(`http://localhost:3000/posts/` + id);
  if (!response.ok) {
    throw { message: 'Failed to fetch post.', status: 500 };
  }

  return response.json();
};

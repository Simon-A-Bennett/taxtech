export const postsLoader = async () => {
  try {
    const response = await fetch(`http://localhost:3000/posts`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const postLoader = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

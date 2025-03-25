type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getPostById = async (id: number): Promise<Post> => {
  if (0 >= id) throw new Error("Invalid post ID");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) throw new Error("Post not found");
  const post: Post = await response.json();
  return post;
};

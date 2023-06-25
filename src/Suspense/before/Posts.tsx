import { useState, useEffect } from 'react';

function Posts({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => {
        setTimeout(() => {
          setPosts(posts);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>글목록 로딩중...</p>;
  return (
    <ul>
      {posts.map((post: { id: string; title: string }) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;

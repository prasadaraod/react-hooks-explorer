import React from 'react';
import useFetch from '../hooks/useFetch';

const PostPage = () => {
    // Destructure properties from the custom hook
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>API Data</h1>
            <ul>
                {posts && posts.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostPage;

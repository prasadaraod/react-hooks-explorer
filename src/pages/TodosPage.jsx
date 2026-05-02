import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
// display todos list
// add todo 
const TodosPage = () => {
    const { data:posts, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos');
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1>TodosPage</h1>
         <h1>API Data</h1>
            <ul>
                {posts && posts.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
    </div>
  )
}

export default TodosPage
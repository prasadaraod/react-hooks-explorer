import { useState, useEffect } from 'react';

const UseEffectPage = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Example 1: Data Fetching (Runs when resourceType changes)
  useEffect(() => {
    console.log(`Fetching data for: ${resourceType}`);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json.slice(0, 5))); // Limit to 5 for display
  }, [resourceType]); // Dependency Array: Only re-run if resourceType changes

  // Example 2: Event Listeners & Cleanup (Runs once on mount)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);

    // CLEANUP FUNCTION: This runs before the component unmounts
    return () => {
      console.log('Cleaning up event listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array means this runs ONLY ONCE (mount)

  return (
    <div style={{ padding: '20px' }}>
      <h1>useEffect Hook</h1>
      <hr />

      <section style={{ marginBottom: '40px' }}>
        <h2>1. Window Width (Event Listener)</h2>
        <p>Current screen width: <strong>{windowWidth}px</strong></p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>2. Data Fetching (Dependency Management)</h2>
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')} style={{ marginLeft: '10px' }}>Users</button>
          <button onClick={() => setResourceType('comments')} style={{ marginLeft: '10px' }}>Comments</button>
        </div>
        <h3>Displaying: {resourceType}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{JSON.stringify(item.name || item.title || item.body).substring(0, 50)}...</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UseEffectPage;
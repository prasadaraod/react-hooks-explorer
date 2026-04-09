import { useState, useDeferredValue, useMemo, useEffect } from 'react';

// A heavy component that renders based on a value
const HeavyList = ({ input }) => {
  const LIST_SIZE = 20000;
  
  // We use useMemo to ensure the list only re-calculates when the input changes
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>Item {i} for "{input}"</div>);
    }
    return l;
  }, [input]);

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
      gap: '5px',
      marginTop: '20px'
    }}>
      {list}
    </div>
  );
};

const UseDeferredValuePage = () => {
  const [query, setQuery] = useState('');
  
  // 1. Create a deferred version of the query
  const deferredQuery = useDeferredValue(query);

  return (
    <div style={{ padding: '20px' }}>
      <h1>useDeferredValue Hook</h1>
      <hr />

      <section>
        <p>This hook is useful when you can't control the state update directly (e.g., props).</p>
        <input 
          type="text" 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
          placeholder="Type to see deferral in action..."
        />
      </section>

      <section style={{ marginTop: '20px' }}>
        <p><strong>Query:</strong> {query}</p>
        <p><strong>Deferred Query:</strong> {deferredQuery}</p>
        
        {/* 2. Pass the deferred value to the heavy component */}
        <div style={{ opacity: query !== deferredQuery ? 0.5 : 1 }}>
          <HeavyList input={deferredQuery} />
        </div>
      </section>
    </div>
  );
};

export default UseDeferredValuePage;
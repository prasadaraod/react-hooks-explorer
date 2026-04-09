import { useState } from 'react';

const UseStatePage = () => {
  // 1. Counter State (Number)
  const [count, setCount] = useState(0);

  // 2. Form State (String)
  const [name, setName] = useState('');

  // 3. Toggle State (Boolean)
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>useState Hook</h1>
      <hr />

      {/* Example 1: Counter */}
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Counter (Numbers)</h2>
        <p>Current Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>Reset</button>
      </section>

      {/* Example 2: Text Input */}
      <section style={{ marginBottom: '40px' }}>
        <h2>2. Form Input (Strings)</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Type something..."
        />
        <p>You typed: <strong>{name || '...'}</strong></p>
      </section>

      {/* Example 3: Toggle */}
      <section style={{ marginBottom: '40px' }}>
        <h2>3. Toggle (Booleans)</h2>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && (
          <div style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
            Peek-a-boo! I am visible because <code>isVisible</code> is true.
          </div>
        )}
      </section>
    </div>
  );
};

export default UseStatePage;
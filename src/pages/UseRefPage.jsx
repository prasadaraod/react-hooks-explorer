import { useState, useEffect, useRef } from 'react';

const UseRefPage = () => {
  const [name, setName] = useState('');
  
  // 1. Ref for DOM Access
  const inputRef = useRef();

  // 2. Ref for Persisting Values (without re-rendering)
  const renderCount = useRef(1);
  const prevName = useRef('');

  // Update render count every time component renders
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // Store the previous value of 'name'
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const focusInput = () => {
    // Accessing the DOM element directly
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#fff9c4';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>useRef Hook</h1>
      <hr />

      <section style={{ marginBottom: '40px' }}>
        <h2>1. DOM Reference</h2>
        <input 
          ref={inputRef}
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Type name here..."
        />
        <button onClick={focusInput} style={{ marginLeft: '10px' }}>
          Focus & Highlight Input
        </button>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>2. Persisting Data (No Re-renders)</h2>
        <p>Current Name: <strong>{name}</strong></p>
        <p>Previous Name: <strong>{prevName.current}</strong></p>
        <p>This component has rendered <strong>{renderCount.current}</strong> times.</p>
        <small>(Notice: Changing the Ref value doesn't cause a render, but the render count updates whenever state changes.)</small>
      </section>
    </div>
  );
};

export default UseRefPage;
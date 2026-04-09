import { useState, useMemo, useEffect } from 'react';

const UseMemoPage = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Example 1: Memoizing an expensive calculation
  // Without useMemo, this slow function runs even when we just toggle the theme!
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // Only re-run if 'number' changes

  // Example 2: Referential Equality
  // Objects in JS are compared by reference. useMemo keeps the reference stable.
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '8px'
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme changed or Style Reference updated');
  }, [themeStyles]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>useMemo Hook</h1>
      <hr />

      <section style={{ marginBottom: '40px' }}>
        <h2>1. Expensive Calculation</h2>
        <input 
          type="number" 
          value={number} 
          onChange={e => setNumber(parseInt(e.target.value) || 0)} 
        />
        <p>Calculation Result (Slow): <strong>{doubleNumber}</strong></p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>2. UI Responsiveness</h2>
        <p>Try toggling the theme. Because the calculation is memoized, the theme change is instant!</p>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>
          The background color is currently {dark ? 'Dark' : 'Light'}.
        </div>
      </section>
    </div>
  );
};

// Simulation of a heavy computation
function slowFunction(num) {
  console.log('Calling Slow Function...');
  for (let i = 0; i <= 1000000000; i++) {} // Artificial delay
  return num * 2;
}

export default UseMemoPage;
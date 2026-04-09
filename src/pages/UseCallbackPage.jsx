import { useState, useCallback } from 'react';
import List from '../components/List'; // We will create this next
// import List from '../components/List';

const UseCallbackPage = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // Without useCallback, this function is "new" every time the theme toggles.
  // With useCallback, it only changes when 'number' changes.
  const getItems = useCallback((incrementalValue) => {
    return [number + incrementalValue, number + 1 + incrementalValue, number + 2 + incrementalValue];
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px'
  };

  return (
    <div style={theme}>
      <h1>useCallback Hook</h1>
      <hr />
      
      <section style={{ marginBottom: '20px' }}>
        <label>Enter Number: </label>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value) || 0)}
        />
        <button onClick={() => setDark(prev => !prev)} style={{ marginLeft: '10px' }}>
          Toggle Theme
        </button>
      </section>

      {/* This component only re-renders if getItems reference changes */}
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackPage;
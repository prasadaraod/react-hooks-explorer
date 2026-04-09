import { useInsertionEffect, useState } from 'react';

const UseInsertionEffectPage = () => {
  const [isRed, setIsRed] = useState(false);

  // 1. Logic to inject styles into the DOM
  useInsertionEffect(() => {
    // In a real CSS-in-JS library, this is where styles are calculated and injected
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .dynamic-button {
        padding: 15px 30px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s;
        background-color: ${isRed ? '#ff4d4d' : '#4da6ff'};
        color: white;
        border: none;
      }
      .dynamic-button:hover {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(styleTag);

    // 2. Cleanup: Remove the style tag when component unmounts or updates
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [isRed]); // Runs before useLayoutEffect and useEffect

  return (
    <div style={{ padding: '20px' }}>
      <h1>useInsertionEffect Hook</h1>
      <hr />

      <section>
        <p>
          This hook is for library authors to inject styles into the DOM 
          <strong> before</strong> any layout effects trigger. This prevents 
          the browser from having to recalculate styles multiple times.
        </p>

        <button 
          className="dynamic-button" 
          onClick={() => setIsRed(!isRed)}
        >
          I am styled via useInsertionEffect
        </button>
      </section>
    </div>
  );
};

export default UseInsertionEffectPage;
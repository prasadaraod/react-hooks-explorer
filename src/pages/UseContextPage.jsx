import { useState, createContext, useContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

const UseContextPage = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    // 2. Provide the value to the children
    <ThemeContext.Provider value={darkTheme}>
      <div style={{ padding: '20px' }}>
        <h1>useContext Hook</h1>
        <hr />
        
        <button onClick={toggleTheme}>Toggle Theme</button>

        <section style={{ marginTop: '20px' }}>
          <LocalComponent />
        </section>
      </div>
    </ThemeContext.Provider>
  );
};

// A sub-component that doesn't receive props but needs the theme
function LocalComponent() {
  // 3. Consume the context
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <h3>I am a Child Component</h3>
      <p>
        I am consuming the theme state directly from the Context Provider 
        without receiving any props!
      </p>
    </div>
  );
}

export default UseContextPage;
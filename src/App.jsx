import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import UseStatePage from './pages/UseStatePage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Simple Sidebar for Navigation */}
        <nav style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc' }}>
          <h2>Hooks</h2>
          <ul>
            <li><Link to="/use-state">useState</Link></li>
            {/* We will add more links here as we go */}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            {/* <Route path="/use-state" element={<UseStatePage />} /> */}
            <Route path="/" element={<h1>Select a Hook to explore</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
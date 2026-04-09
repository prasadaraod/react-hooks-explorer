import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UseStatePage from './pages/UseStatePage';
import UseEffectPage from './pages/UseEffectPage';
import UseContextPage from './pages/UseContextPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';
import UseRefPage from './pages/UseRefPage';
import UseReducerPage from './pages/UseReducerPage';
import UseTransitionPage from './pages/UseTransitionPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Simple Sidebar for Navigation */}
        <nav style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc' }}>
          <h2>Hooks</h2>
          <ul>
            <li><Link to="/use-state">useState</Link></li>
            <li><Link to="/use-effect">useEffect</Link></li>
            <li><Link to="/use-context">useContext</Link></li>
            <li><Link to="/use-memo">useMemo</Link></li>
            <li><Link to="/use-callback">useCallback</Link></li>
            <li><Link to="/use-ref">useRef</Link></li>
            <li><Link to="/use-reducer">useReducer</Link></li>
            <li><Link to="/use-transition">useTransition</Link></li>
            {/* We will add more links here as we go */}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/use-state" element={<UseStatePage />} />
            <Route path='/use-effect' element={<UseEffectPage />} />
            <Route path='/use-context' element={<UseContextPage />} />
            <Route path="/use-memo" element={<UseMemoPage />} />
            <Route path='/use-callback' element={<UseCallbackPage />} />
            <Route path='/use-ref' element={<UseRefPage />} />
            <Route path='/use-reducer' element={<UseReducerPage />} />
            <Route path='/use-transition' element={<UseTransitionPage />} />
            <Route path="/" element={<h1>Select a Hook to explore</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
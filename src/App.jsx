import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UseStatePage from './pages/UseStatePage';
import UseEffectPage from './pages/UseEffectPage';
import UseContextPage from './pages/UseContextPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';
import UseRefPage from './pages/UseRefPage';
import UseReducerPage from './pages/UseReducerPage';
import UseTransitionPage from './pages/UseTransitionPage';
import UseDeferredValuePage from './pages/UseDeferredValuePage';
import UseLayoutEffectPage from './pages/UseLayoutEffectPage';
import UseIdPage from './pages/UseIdPage';
import UseImperativeHandlePage from './pages/UseImperativeHandlePage';
import UseSyncExternalStorePage from './pages/UseSyncExternalStorePage';
import UseInsertionEffectPage from './pages/UseInsertionEffectPage';
import CounterPage from './pages/CounterPage';
import MultipleDynamicInputs from './pages/MultipleDynamicInputs';
import RegistrationPage from './pages/RegistrationPage';
import MultipleInputs from './pages/MultipleInputs';
import TodosPage from './pages/TodosPage';
import PostPage from './pages/PostPage';

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
            <li><Link to="/use-deferred-value">useDeferredValue</Link></li>
            <li><Link to="/use-layout-effect">useLayoutEffect</Link></li>
            <li><Link to="/use-id">useId</Link></li>
            <li><Link to="/use-imperative-handle">useImperativeHandle</Link></li>
            <li><Link to="/use-sync-external-store">useSyncExternalStore</Link></li>
            <li><Link to="/use-insertion-effect">useInsertionEffect</Link></li>

            <li><Link to="/counter-page">Counter Page</Link></li>
            <li><Link to="/dynamic-inputs"> Dynamic inputs</Link></li>
            <li><Link to="/registration-page"> Registration page </Link></li>
            <li><Link to="/multiple-inputs"> Multiple Inputs</Link></li>
            <li><Link to="/todos-page"> Todos Page</Link></li>
            <li><Link to="/post-page"> post page</Link></li>
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
            <Route path='/use-deferred-value' element={<UseDeferredValuePage />} />
            <Route path='/use-layout-effect' element={<UseLayoutEffectPage />} />
            <Route path='/use-id' element={<UseIdPage />} />
            <Route path='/use-imperative-handle' element={<UseImperativeHandlePage />} />
            <Route path='/use-sync-external-store' element={<UseSyncExternalStorePage />} />
            <Route path='/use-insertion-effect' element={<UseInsertionEffectPage />} />
            <Route path='/counter-page' element={<CounterPage />} />
            <Route path='/dynamic-inputs' element={<MultipleDynamicInputs />} />
            <Route path='/registration-page' element={<RegistrationPage />} />
            <Route path='/multiple-inputs' element={<MultipleInputs/>} />
            <Route path="/todos-page" element={<TodosPage />} />
            <Route path='/post-page' element={<PostPage />} />
            <Route path="/" element={<h1>Select a Hook to explore</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
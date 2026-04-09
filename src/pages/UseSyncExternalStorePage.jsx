import { useSyncExternalStore } from 'react';

// 1. Define the "Subscribe" function
// This tells React how to listen for changes in the external store
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  
  // Return a cleanup function to remove listeners
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

// 2. Define the "Get Snapshot" function
// This tells React how to read the current value from the external store
function getSnapshot() {
  return navigator.onLine;
}

const UseSyncExternalStorePage = () => {
  // 3. Connect React to the external browser state
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div style={{ padding: '20px' }}>
      <h1>useSyncExternalStore Hook</h1>
      <hr />

      <section>
        <p>
          This hook is used to subscribe to external data sources. In this example, 
           we are tracking the browser's connectivity status.
        </p>

        <div style={{
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '1.5rem',
          backgroundColor: isOnline ? '#e8f5e9' : '#ffebee',
          color: isOnline ? '#2e7d32' : '#c62828',
          border: `2px solid ${isOnline ? '#2e7d32' : '#c62828'}`
        }}>
          {isOnline ? '✅ You are ONLINE' : '❌ You are OFFLINE'}
        </div>

        <p style={{ marginTop: '20px' }}>
          <em>Try toggling "Offline" in your Browser DevTools (Network tab) to see the change instantly.</em>
        </p>
      </section>
    </div>
  );
};

export default UseSyncExternalStorePage;
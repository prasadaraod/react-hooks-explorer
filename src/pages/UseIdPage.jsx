import { useId } from 'react';

// A reusable component that generates its own unique ID
const EmailForm = ({ label }) => {
  const id = useId();

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <label htmlFor={id}>{label}: </label>
      <input id={id} type="email" placeholder="enter email..." />
      <p><small>Generated ID: <code>{id}</code></small></p>
    </div>
  );
};

const UseIdPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>useId Hook</h1>
      <hr />

      <section>
        <p>
          The <code>useId</code> hook generates unique IDs that are stable across 
          renders. This is perfect for linking labels to inputs or connecting 
          ARIA attributes.
        </p>
        
        <h3>Instance 1</h3>
        <EmailForm label="Personal Email" />

        <h3>Instance 2</h3>
        <EmailForm label="Work Email" />
      </section>

      <section style={{ marginTop: '30px' }}>
        <h3>Why not just use Math.random()?</h3>
        <ul>
          <li><strong>SSR Compatibility:</strong> IDs generated with Math.random() will differ between the server and the client, causing hydration errors.</li>
          <li><strong>Stability:</strong> <code>useId</code> ensures the ID stays the same as long as the component is mounted.</li>
        </ul>
      </section>
    </div>
  );
};

export default UseIdPage;
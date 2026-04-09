import { useState, useTransition } from 'react';

const UseTransitionPage = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    // 1. URGENT update: The text box should update immediately as we type
    setInput(e.target.value);

    // 2. NON-URGENT update: Filtering a massive list
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>useTransition Hook</h1>
      <hr />

      <section style={{ marginBottom: '20px' }}>
        <p>Type fast in the box below. Notice the input is smooth, even though we are rendering {LIST_SIZE} items below.</p>
        <input type="text" value={input} onChange={handleChange} placeholder="Type to trigger heavy render..." />
      </section>

      <section>
        {isPending ? (
          <p style={{ color: 'blue', fontWeight: 'bold' }}>Loading heavy list...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '5px' }}>
            {list.map((item, index) => (
              <div key={index} style={{ fontSize: '10px', border: '1px solid #ddd', padding: '2px' }}>
                {item}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default UseTransitionPage;
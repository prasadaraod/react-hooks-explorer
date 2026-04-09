import { useState, useRef, useImperativeHandle, forwardRef } from 'react';

// 1. Child Component wrapped in forwardRef
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [shake, setShake] = useState(false);

  // 2. Define exactly what the parent can access
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
      shake: () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    };
  }, []);

  return (
    <input
      ref={inputRef}
      style={{
        transition: 'transform 0.1s',
        transform: shake ? 'translateX(10px)' : 'translateX(0)',
        border: shake ? '2px solid red' : '1px solid #ccc',
        padding: '10px'
      }}
      {...props}
    />
  );
});

const UseImperativeHandlePage = () => {
  const customInputRef = useRef();

  return (
    <div style={{ padding: '20px' }}>
      <h1>useImperativeHandle Hook</h1>
      <hr />

      <section>
        <p>
          This hook lets you hide the internal DOM structure and only expose 
          specific functions to the parent component.
        </p>

        <CustomInput ref={customInputRef} placeholder="I am a restricted input" />
        
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => customInputRef.current.focus()}>
            Focus Input
          </button>
          <button 
            onClick={() => customInputRef.current.shake()} 
            style={{ marginLeft: '10px' }}
          >
            Trigger Shake Effect
          </button>
        </div>
      </section>
    </div>
  );
};

export default UseImperativeHandlePage;
import { useState, useLayoutEffect, useRef } from 'react';

const UseLayoutEffectPage = () => {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  // useLayoutEffect ensures the position is calculated BEFORE the tooltip appears
  useLayoutEffect(() => {
    if (tooltipRef.current == null || buttonRef.current == null) return;

    // Measure the button position
    const { bottom } = buttonRef.current.getBoundingClientRect();
    
    // Set the tooltip top position to be exactly below the button
    setTop(bottom + 25);
    
    console.log("useLayoutEffect: Position calculated before paint");
  }, [show]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>useLayoutEffect Hook</h1>
      <hr />

      <section>
        <p>
          Click the button below. Even if the calculation was slow, 
          <code>useLayoutEffect</code> prevents the "flicker" of the tooltip 
          moving from its initial position to its calculated position.
        </p>

        <button 
          ref={buttonRef} 
          onClick={() => setShow(prev => !prev)}
          style={{ padding: '10px 20px' }}
        >
          Toggle Tooltip
        </button>

        {show && (
          <div 
            ref={tooltipRef}
            style={{
              position: 'absolute',
              top: `${top}px`,
              background: '#333',
              color: '#fff',
              padding: '10px',
              borderRadius: '4px',
              zIndex: 10
            }}
          >
            I am a Tooltip positioned via useLayoutEffect!
          </div>
        )}
      </section>
    </div>
  );
};

export default UseLayoutEffectPage;
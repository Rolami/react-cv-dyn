import React, { useEffect, useState } from 'react';

function App() {
  const [keysPressed, setKeysPressed] = useState('');

  useEffect(() => {
    function handleKeyDown(e) {
      setKeysPressed((keys) => keys + e.key);
    }

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (keysPressed.includes('red')) {
      document.body.style.backgroundColor = 'red';
      document.body.style.color = 'blue';
      setKeysPressed('');
    }
  }, [keysPressed]);
  useEffect(() => {
    if (keysPressed.includes('blue')) {
      document.body.style.backgroundColor = 'blue';
      document.body.style.color = 'red';
      setKeysPressed('');
    }
  }, [keysPressed]);

  
  return (
    <div />
  );
}

export default App;

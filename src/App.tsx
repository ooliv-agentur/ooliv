import React from 'react';

// EMERGENCY MINIMAL TEST - NO IMPORTS, NO PROVIDERS, NOTHING
function App() {
  console.log('🚀 App component loading...');
  
  return (
    <div style={{ 
      background: 'red', 
      color: 'white', 
      padding: '50px', 
      fontSize: '30px',
      minHeight: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <h1>🔥 MINIMAL TEST</h1>
      <p>Wenn Sie das sehen - App lädt!</p>
      <p>Timestamp: {new Date().toLocaleTimeString()}</p>
      <button 
        onClick={() => alert('Button funktioniert!')}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          background: 'blue', 
          color: 'white', 
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Test Button
      </button>
    </div>
  );
}

export default App;
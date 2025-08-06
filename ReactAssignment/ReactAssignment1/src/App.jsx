import './App.css';
import React, { useState, useEffect } from 'react';
import Cursor from './components/Header/cursor/Cursor';
import Loader from './components/Loader/Loader';
import Routers from './router/Routers';


function App() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border border-solid">
      {loading ? (
        <Loader />
      ) : (
        <>
        <Cursor />
        <Routers/>
          
        </>
      )}
    </div>
  );
}

export default App;

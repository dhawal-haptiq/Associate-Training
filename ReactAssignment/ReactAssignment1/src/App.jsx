import React, { useState, useEffect } from 'react';
import './App.css';
import Cursor from './components/Header/cursor/Cursor';
import Loader from './components/Loader/Loader';
import Routers from './router/Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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
          <Routers />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </div>
  );
}

export default App;

import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider, { ToastContext } from '../ToastProvider/ToastProvider';

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;

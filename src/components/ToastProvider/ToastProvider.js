import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  const handleAddToast = React.useCallback(() => {
    setToasts(prev => prev.concat({ variant, message, id: crypto.randomUUID() }));
    setMessage('');
  }, [message, variant]);

  const handleRemoveToast = React.useCallback(toastId => {
    setToasts([].concat(toasts.filter(toast => toast.id !== toastId)));
  }, [toasts]);

  const handleMessageChange = React.useCallback(event => {
    setMessage(event.target.value);
  }, []);

  const handleVariantChange = React.useCallback(event => {
    setVariant(event.target.value);
  }, []);

  const handleCloseAll = React.useCallback(() => setToasts([]), []);

  const value = React.useMemo(() => (
    {
      toasts,
      message,
      variant,
      handleAddToast,
      handleRemoveToast,
      handleMessageChange,
      handleVariantChange,
      handleCloseAll
    }
  ), [toasts, message, variant, handleAddToast, handleMessageChange, handleRemoveToast, handleVariantChange, handleCloseAll])

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

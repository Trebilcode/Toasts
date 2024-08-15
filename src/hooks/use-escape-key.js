import React from 'react'
import { ToastContext } from '../components/ToastProvider/ToastProvider';

const useEscapeKey = () => {

    const { handleCloseAll } = React.useContext(ToastContext);

    React.useEffect(() => {
        const handler = event => {
            if (event.code === 'Escape') {
                handleCloseAll();
            }
        }

        document.addEventListener('keydown', handler);

        return () => document.removeEventListener('keydown', handler);
    }, [handleCloseAll]);
}

export default useEscapeKey
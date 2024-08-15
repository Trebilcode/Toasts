import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useEscapeKey from '../../hooks/use-escape-key';

function ToastShelf() {

  const { toasts } = React.useContext(ToastContext);

  useEscapeKey();

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

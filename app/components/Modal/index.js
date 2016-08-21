/**
*
* Modal
*
*/

import React from 'react';
import styles from './styles.css';

function Modal({ headingText, children, actions }) {
  const preppedActions = actions.map(a =>
    <div
      className={styles.action}
    >
      {a}
    </div>
  );

  return (
    <div
      className={styles.card}
    >
      <div
        className={styles.cardHeading}
      >
        {headingText}
      </div>

      {children}

      <div
        className={styles.actionContainer}
      >
        {preppedActions}
      </div>
    </div>
  );
}

export default Modal;

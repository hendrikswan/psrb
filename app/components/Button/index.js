/**
*
* Button
*
*/

import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Button({ text, onClick, className }) {
  return (
    <div
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

export default Button;

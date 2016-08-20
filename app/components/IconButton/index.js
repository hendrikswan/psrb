/**
*
* IconButton
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import classNames from 'classnames';


function IconButton({
  icon,
  onClick,
  disabled = false,
  iconClass,
  buttonClass,
}) {
  return (
    <div
      className={classNames(styles.iconButton, buttonClass)}
      onClick={onClick}
    >
      <FontAwesome
        className={classNames(styles.icon, iconClass, { [styles.disabled]: disabled })}
        name={icon}
      />
    </div>
  );
}

IconButton.propTypes = {
  icon: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  size: React.PropTypes.number,
  disabled: React.PropTypes.bool,
};

export default IconButton;

/**
*
* Link
*
*/

import React from 'react';
import styles from './styles.css';

class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const link = this.props.link;
    return (
      <div
        className={styles.link}
        key={link.id}
      >
        <div>
          {link.url} - {link.description}
        </div>
      </div>
    );
  }
}

Link.propTypes = {
  link: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    votingDisabled: React.PropTypes.boolean,
  }),
};

export default Link;

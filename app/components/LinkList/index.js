/**
*
* LinkList
*
*/
import React from 'react';
import styles from './styles.css';
import Link from './../Link';

class LinkList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.requestLinks();
  }

  render() {
    console.log('LINK: ', this.props.links);

    const linkNodes = this.props.links.map(link => (
      <Link
        key={link.id}
        link={link}
      />
    ));
    return (
      <div className={styles.linkList}>
        {linkNodes}
      </div>
    );
  }
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    })).isRequired,
  requestLinks: React.PropTypes.func.isRequired,
};

export default LinkList;

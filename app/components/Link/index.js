/**
*
* Link
*
*/

import React from 'react';
import styles from './styles.css';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card/Card';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';


class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getUpButton({ link, onVoteUp }) {
    const upLink = (
      <a
        href="#Up"
        onClick={
                (e) => {
                  onVoteUp(link);
                  e.preventDefault();
                }
              }
      >
        Up
      </a>
    );
    return upLink;
  }

  getDownButton({ link, onVoteDown }) {
    const downLink = (
      <a
        href="#Down"
        onClick={
              (e) => {
                onVoteDown(link);
                e.preventDefault();
              }
            }
      >
        Down
      </a>
  );

    return downLink;
  }


  render() {
    const link = this.props.link;
    return (
      <Card
        key={link.id}
        style={{
          marginBottom: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            marginTop: 15,
          }}
        >
          <div
            className={styles.link}
            key={link.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {this.getUpButton({ link, onVoteUp: this.props.onVoteUp })}
            <div
              style={{
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              {link.voteCount}
            </div>
            {this.getDownButton({ link, onVoteDown: this.props.onVoteDown })}
          </div>
          <ListItem
            primaryText={link.url}
            secondaryText={link.description}
          />
        </div>
      </Card>
    );
  }
}

Link.propTypes = {
  link: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    voteCount: React.PropTypes.number.isRequired,
    votingDisabled: React.PropTypes.boolean,
  }),
  onVoteUp: React.PropTypes.func.isRequired,
  onVoteDown: React.PropTypes.func.isRequired,
};

export default Link;

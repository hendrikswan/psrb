/**
*
* VotingButton
*
*/

import React from 'react';
import { grey400 } from 'material-ui/styles/colors';

function VotingButton({ link, onVote, icon }) {
  let styledIcon = React.cloneElement(icon, {
    style: {
      width: 50,
      height: 50,
    },
  });

  if (!link.votingEnabled) {
    styledIcon = React.cloneElement(styledIcon, {
      color: grey400,
    });
  }

  let onClick = link.votingEnabled
  ? (e) => {
    onVote();
    e.preventDefault();
  }
  : () => {};


  const voteLink = (
    <a
      style={{
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {styledIcon}
    </a>
  );
  return voteLink;
}

VotingButton.propTypes = {
  icon: React.PropTypes.node.isRequired,
  onVote: React.PropTypes.func.isRequired,
};

export default VotingButton;

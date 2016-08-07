/**
*
* VotingButton
*
*/

import React from 'react';

function VotingButton({ onVote, icon }) {
  const styledIcon = React.cloneElement(icon, {
    style: {
      width: 50,
      height: 50,
    },
  });


  const voteLink = (
    <a
      style={{
        cursor: 'pointer',
      }}
      onClick={
        (e) => {
          onVote();
          e.preventDefault();
        }
      }
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

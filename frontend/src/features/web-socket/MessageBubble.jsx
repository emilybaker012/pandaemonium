import React from 'react';
import PropTypes from 'prop-types';

const MessageBubble = ({
  username, message, timestamp, sent,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <b
        style={{
          color: 'var(--panda-lighter-gray)',
          padding: '2px 12px',
          fontSize: '.7rem',
          textAlign: sent ? 'end' : 'start',
        }}
      >{username}
      </b>
      <div
        style={{
          display: 'flex',
          fontSize: '1rem',
          backgroundColor: sent ? 'var(--bamboo-green-light)' : 'var(--panda-gray)',
          borderRadius: '24px',
          alignSelf: sent ? 'flex-end' : 'flex-start',
          padding: '6px 18px',
          color: 'white',
          lineHeight: '20px',

        }}
      > {message}
      </div>
      <i style={{
        color: 'var(--panda-lighter-gray)',
        fontSize: '.6rem',
        textAlign: sent ? 'end' : 'start',
        padding: '2px 12px',
      }}
      >{timestamp}
      </i>

    </div>
  );
};

MessageBubble.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  sent: PropTypes.bool.isRequired,
};

export default MessageBubble;

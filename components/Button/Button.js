import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function Button(props) {
  return (
    <RaisedButton
      label={props.delta > 0 ? `+${props.delta}` : props.delta}
      primary
      style={{
        marginRight: 12,
        marginBottom: 12,
      }}
      onClick={() => props.onProgress(props.delta)}
    />
  );
}

Button.propTypes = {
  delta: PropTypes.number.isRequired,
  onProgress: PropTypes.func.isRequired,
};

export default Button;

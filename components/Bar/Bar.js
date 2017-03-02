import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import { pinkA200, cyan500 } from 'material-ui/styles/colors';
import s from './Bar.css';

function Bar(props) {
  return (
    <div className={s.bar}>
      <LinearProgress
        mode="determinate"
        value={props.progress}
        color={props.progress > 100 ? pinkA200 : cyan500}
        style={{
          borderRadius: 8,
          height: 50,
        }}
      />
      <div className={s.barLabel}>
        {`${props.progress}%`}
      </div>
    </div>
  );
}

Bar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Bar;

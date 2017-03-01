import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { pinkA200, cyan500 } from 'material-ui/styles/colors';
import Layout from '../../components/Layout';
import s from './styles.css';
import { setIndex, setProgress } from '../actions';

class HomePage extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      buttons: PropTypes.array,
      bars: PropTypes.array,
    }).isRequired,
    index: PropTypes.number,
    setIndex: PropTypes.func.isRequired,
    setProgress: PropTypes.func.isRequired,
  };

  handleButtonClick = (delta) => {
    this.props.setProgress({
      delta,
      index: this.props.index,
    });
  }

  handleSelectorChange = (event, index, value) => {
    this.props.setIndex({ index: value });
  };

  renderBars() {
    return this.props.data.bars.map(bar => (
      <div key={bar.index} className={s.bar}>
        <LinearProgress
          mode="determinate"
          value={bar.progress}
          color={bar.progress > 100 ? pinkA200 : cyan500}
          style={{
            borderRadius: 8,
            height: 50,
          }}
        />
        <div className={s.barLabel}>
          {`${bar.progress}%`}
        </div>
      </div>
    ));
  }

  renderSelector() {
    return (
      <div>
        <SelectField
          floatingLabelText="Progress bar"
          value={this.props.index}
          onChange={this.handleSelectorChange}
        >
          {
            this.props.data.bars.map(bar => (
              <MenuItem
                key={bar.index}
                value={bar.index}
                primaryText={`#progress ${bar.index}`}
              />
            ))
          }
        </SelectField>
      </div>
    );
  }

  renderButtons() {
    return this.props.data.buttons.map(button => (
      <RaisedButton
        key={button.index}
        label={button.delta > 0 ? `+${button.delta}` : button.delta}
        primary
        style={{
          marginRight: 12,
          marginBottom: 12,
        }}
        onClick={() => this.handleButtonClick(button.delta)}
      />
    ));
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>Progress Bars</h1>
        {this.renderBars()}
        {this.renderSelector()}
        {this.renderButtons()}
      </Layout>
    );
  }
}

const mapStateToProps = (state => ({
  data: state.data,
  index: state.index,
}));

const mapDispatchToProps = {
  setIndex,
  setProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Layout from '../../components/Layout';
import Bar from '../../components/Bar';
import Button from '../../components/Button';
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
      <Bar key={bar.index} progress={bar.progress} />
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
      <Button key={button.index} delta={button.delta} onProgress={this.handleButtonClick} />
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

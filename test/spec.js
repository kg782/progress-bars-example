import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LinearProgress from 'material-ui/LinearProgress';
import Bar from '../components/Bar';

describe('Bar', () => {

  it('should render LinearProgress and div', () => {
    const wrapper = shallow(<Bar progress={50} />);
    expect(wrapper.containsAllMatchingElements([
      <LinearProgress value={50} mode="determinate" />,
      <div>50%</div>,
    ])).to.equal(true);
  });

});

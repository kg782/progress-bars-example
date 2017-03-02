import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import jsdom from 'jsdom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Bar from '../components/Bar';
import Button from '../components/Button';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Bar', () => {

  it('should render LinearProgress and div', () => {
    const wrapper = shallow(<Bar progress={50} />);
    expect(wrapper.containsAllMatchingElements([
      <LinearProgress value={50} mode="determinate" />,
      <div>50%</div>,
    ])).to.equal(true);
  });

});

describe('Button', () => {

  it('should render RaisedButton', () => {
    const wrapper = shallow(<Button delta={15} />);
    expect(wrapper.containsAllMatchingElements([
      <RaisedButton label="+15" />,
    ]));
  });

  it('should call onProgress when Button is clicked', () => {
    const handleProgressSpy = spy();
    const wrapper = mount(
      <MuiThemeProvider>
        <Button delta={35} onProgress={handleProgressSpy} />
      </MuiThemeProvider>);
    const button = wrapper.find('button');
    button.simulate('click');

    expect(handleProgressSpy.calledOnce).to.equal(true);
    expect(handleProgressSpy.calledWith(35)).to.equal(true);
  });
});

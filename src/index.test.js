import React   from 'react';
import { shallow } from 'enzyme';

import Time from './index';

describe('Time', () => {
  const date = new Date('1995-12-17 11:39:09');

  it('should render', () => {
    const actual = shallow(<Time>{date}</Time>);
    expect(actual).toMatchSnapshot();
  });

  it('should format specified date', () => {
    const wrapper = shallow(<Time format="YYYY/MM/DD">{date}</Time>);
    const expected = '1995/12/17';
    expect(wrapper.text()).toBe(expected);
    expect(wrapper).toMatchSnapshot();
  });

  it('should filter', () => {
    const wrapper = shallow(
      <Time
        format="HH:mm:ss A"
        filter={d => d.toLowerCase()}
      >
        {date}
      </Time>
    );
    const expected = '11:39:09 am';

    expect(wrapper.text()).toBe(expected);
    expect(wrapper).toMatchSnapshot();
  });

  it('should format with Time "format" helper', () => {
    const expected = '1995/12/17';

    expect(Time.format(date, 'YYYY/MM/DD')).toBe(expected);
  });

  it('should parse with Time "parse" helper', () => {
    const expected = 'Invalid Date';
    expect(Time.parse(date)).not.toBe(expected);
  });
});
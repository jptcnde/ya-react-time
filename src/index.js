import React from 'react';
import PropTypes from 'prop-types';

import getValue from './getValue';

const valueTypes = [
  PropTypes.string,
  PropTypes.number,
  PropTypes.array,
  PropTypes.object
];

class Time extends React.PureComponent {
  static propTypes = {
    /**
     * computed value or time to display
     */
    children: PropTypes.oneOfType(valueTypes),
    /**
     * same as children prop
     * @type {[type]}
     */
    value: PropTypes.oneOfType(valueTypes),
    /**
     * format the date instance
     */
    format: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),

    /**
     * make additional modification rendering
     * occurence - parse > format > filter
     */
    filter: PropTypes.func,

    /**
     * Component to use i.e <span>
     * @type {[type]}
     */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    value: '',
    children: '',
    format: 'YYYY-MM-DDTHH:mm:ss',
    component: 'span',
    filter: d => d,
  }

  render() {
    const {
      component: Component,
      ...props
    } = this.props;

    return (
      <Component
        {...props}
      >
        {getValue(props)}
      </Component>
    );
  }
}

export default Time;
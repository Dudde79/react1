import React from 'react';
import './icon.css';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'standard', 'large'])
};

const defaultProps = {
  size: 'standard'
};

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
      
  render() {
    return (
      <div className={`wrapper icon-size-${this.props.size}`}>
        <svg height='100%' width='100%' className={`icon icon-${this.props.icon}`}>
          <use xlinkHref={`fa-regular.svg#${this.props.icon}`} />
        </svg>
      </div>
    )
  }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;

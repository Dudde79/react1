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
        <svg className={`icon spinn icon-${this.props.icon} icon-size-${this.props.size}`}>
            <use xlinkHref={`fa-regular.svg#${this.props.icon}`} />
        </svg>
      
    )
  }
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;

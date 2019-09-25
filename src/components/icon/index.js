import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './styles.css';

export default function Icon(props) {

    const { type, size, className, ...selfProps } = props;
    const iconStyle = {
        minWidth: `${size}px`,
        minHeight: `${size}px`
    };

    return (
        <span 
        {...selfProps}
        style={iconStyle}
        className={classnames(classes.icon, className, classes[type])}
        />
    )
}

Icon.defaultProps = {
    size: 20,
    className: ''
};

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.number,
    className: PropTypes.string
};
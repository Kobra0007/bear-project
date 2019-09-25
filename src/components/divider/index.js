import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import classes from './styles.css';

export default function Divider ({ className, ...selfProps }) {
    return (
        <div {...selfProps} className={classnames(className, classes.divider)} />
    )
}

Divider.defaultProps = {
    className: ''
};

Divider.propTypes = {
    className: PropTypes.string
};
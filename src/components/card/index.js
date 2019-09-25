import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './styles.css';

export default function Card({ className, children, ...selfProps }) {
    return (
        <div {...selfProps} className={classnames(className, classes.card)}>
            {children}
        </div>
    );
}

Card.defaultProps = {
    className: ''
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired
};
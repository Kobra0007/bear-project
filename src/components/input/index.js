import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './styles.css';

import Text from '../text';

export default function Input ({ type, className, label, ...selfProps }) {
    return (
        <label className={classes.label}>
            <Text className={classes.description}>{label}</Text>
            <input 
                className={classnames( classes.input, className, {
                    [classes[type]]: true,
                })}
                type={type}
                {...selfProps}
            />
        </label>
    )
}

Input.defaultProps = {
    type: 'text'
};

Input.propTypes = {
    text: PropTypes.string
}
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './styles.css';

export default function Button(props) {
    
    const { size, type, disable, className, htmlType, ...selfProps } = props;
    
    return (
        <button
            type={htmlType}
            disabled={disable}
            className={classnames(classes.button, className, {
                [classes[size]]: true,
                [classes[type]]: true,
                [classes.disable]: disable
            })}
            {...selfProps}
        />
    )
}


Button.defaultProps = {
    size: 'def',
    disable: false,
    htmlType: 'button',
    className: ''
};

Button.propTypes = {
    size: PropTypes.string,
    disable: PropTypes.bool,
    htmlType: PropTypes.string,
    className: PropTypes.string
}
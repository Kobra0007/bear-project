import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import classes from './styles.css';

const getType = type => {
  switch (type) {
    case 'h1':
      return 'h1';
    case 'h2':
    case 'title':
      return 'h1';
    case 'news-title':
      return 'h2';
    case 'h3':
    case 'form-caption':
      return 'h2';
    case 'h4':
      return 'h4';
    case 'error':
    case 'asterisk':
    case 'user-info':
    case 'input-label':
    case 'input-active':
      return 'span';
    case 'form-popup':
    default:
      return 'p';
  }
};

export default function Text({ type, align, children, component, className, ...selfProps }) {
  const Type = component || getType(type);

  return (
    <Type {...selfProps} className={classnames(classes[type], classes[align], className)}>
      {children}
    </Type>
  );
}

Text.defaultProps = {
  type: 'p',
  align: 'left',
  component: null,
  className: ''
};

Text.propTypes = {
  type: PropTypes.oneOf([
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'title',
    'error',
    'asterisk',
    'user-info',
    'news-title',
    'form-popup',
    'input-label',
    'form-caption',
    'input-active',
  ]),
  align: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string
};

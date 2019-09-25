/* eslint-disable import/no-extraneous-dependencies, jsx-a11y/accessible-emoji */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Text from './index';

import '../../styles.css';

const types = {
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  title: 'title',
  asterisk: 'asterisk',
  'user-info': 'user-info',
  'form-popup': 'form-popup',
  'input-label': 'input-label',
  'form-caption': 'form-caption',
  'input-active': 'input-active'
};

const align = {
  left: 'left',
  right: 'right',
  center: 'center'
};

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('Text', () => (
    <Text
      type={select('Type', types, 'p')}
      align={select('align', align, 'left')}
      component={text('Component', '')}
    >
      {text('Text', 'Алвыравлы аывадрывдларыв ывавыа ывла выаб ываыв . ываываываыва ывафы ваыва')}
    </Text>
  ));

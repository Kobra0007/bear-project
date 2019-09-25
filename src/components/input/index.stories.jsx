import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Input from './index';

storiesOf('Input', module)
    .addDecorator(withKnobs)
    .add('Input', () => (
        <Input
            type={select(
            'Type',
            {
                text: 'text',
            },
            'text'
          )}
      onClick={action('clicked')}
    />
));
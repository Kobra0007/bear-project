import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with text', () => (
        <Button
            error={boolean('error', true)}
            success={boolean('success', true)}
            primary={boolean('primary', true)}
            secondary={boolean('secondary', true)}
            onClick={action('clicked')}
        >
            {text('Text', 'hello')}
        </Button>
    ))
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

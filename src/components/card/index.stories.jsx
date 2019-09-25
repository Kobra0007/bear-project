import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Card from './index';

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <Card style={{ padding: '15px', width: '400px', margin: 'auto' }}>
            {text('Text', 'Алвыравлы аывадрывдларыв ывавыа ывла выаб ываыв . ываываываыва ывафы ваыва')}
        </Card>
    ));
import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './index';

import '../../styles.css';

storiesOf('Divider', module).add('Divider', () => (
    <div>
        Text before divider
        <Divider />
        Text between dividers
        <Divider />
        Text after divider
    </div>
));
import React from 'react';
import { render } from 'react-dom';

function Hello() {
    return (
        <div>
        <h1>Hellow</h1>
        <h3>man</h3>
        </div>
    );
}

const $root = window.document.querySelector('#root');

render(<Hello />, $root);
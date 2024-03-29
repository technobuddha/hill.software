import React        from 'react';
import { render }   from 'react-dom';
import App          from '#client/app';

import './index.css';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        const content           = document.createElement('div');
        content.style.position  = 'relative';
        content.style.width     = '100vw';
        content.style.height    = '100vh';
        content.style.overflow  = 'hidden';
        document.body.appendChild(content);

        render(<App />, content);
    }
);

// Джерело: https://github.com/donavon/use-dark-mode.git, автор: Donavon West

import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
    const darkMode = useDarkMode(true);

    return (
        <div className="dark-mode-toggle">
            <Toggle checked={darkMode.value} onChange={darkMode.toggle}/>
        </div>
    );
};

export default DarkModeToggle;

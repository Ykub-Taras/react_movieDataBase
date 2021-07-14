// Джерело: https://github.com/cawfree/react-dark-mode-toggle.git, автор: Alexander Thomas

import DarkModeToggle from "react-dark-mode-toggle";

export default function Toggle({checked, onChange}) {
    return (<div className="toggle-control">
            <DarkModeToggle className="dmcheck"
                            type="checkbox"
                            onChange={onChange}
                            checked={checked}
                            size={60}
            /></div>
    );
};

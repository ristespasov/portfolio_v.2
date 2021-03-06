import React, { useContext } from 'react';

// Context
import Context from '../context/context';

const Theme = () => {
    const { handleTheme } = useContext(Context);

    return (
        <div id="theme-toggler">
            <label id="switch" className="switch">
                <input id="slider" type="checkbox" onChange={() => handleTheme()} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Theme
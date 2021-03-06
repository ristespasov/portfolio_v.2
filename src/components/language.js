import React, { useContext } from 'react';

// Context
import Context from '../context/context';

const Language = () => {
    const { handleLanguage } = useContext(Context);

    return (
        <div id="language-selection">
            <button onClick={() => handleLanguage('en')}>English</button>
            <button onClick={() => handleLanguage('es')}>Español</button>
            <button onClick={() => handleLanguage('sv')}>Svenska</button>
        </div>
    );
}

export default Language
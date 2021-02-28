import React, { useContext } from 'react';

// Context
import Context from '../context/context';

const Language = () => {
    const { handleSelect } = useContext(Context);

    return (
        <div id="language-selection">
            <button onClick={() => handleSelect('en')}>English</button>
            <button onClick={() => handleSelect('es')}>Español</button>
            <button onClick={() => handleSelect('sv')}>Svenska</button>
        </div>
    );
}

export default Language
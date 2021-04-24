import React, { useState } from 'react';
import Example from './components/Example';

const App = () => {

    const [isOpen, setIsOpen] = useState(false);

    const showForm = () => {
        setIsOpen(true)

    };
    const hideForm = () => {
        setIsOpen(false)
    };

    return (
        <Example
            isOpen={isOpen}
            showForm={showForm}
            hideForm={hideForm}

        />
    )
}

export default App;
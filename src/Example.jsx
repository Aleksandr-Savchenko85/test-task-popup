import React from 'react';
import Popup from './Popup.jsx';
import ButtonOpenPop from './ButtonOpenPop.jsx';

const Example = ({ isOpen, showForm, hideForm }) => {
    return (
        <div className="example_one">
            <>
                <ButtonOpenPop
                    showForm={showForm}
                />
                <Popup
                    isOpen={isOpen}
                    hideForm={hideForm}
                />
            </>
        </div>
    )
}

export default Example;
import React from 'react';

const ButtonOpenPop = ({ showForm }) => {
    return (
        <button className='donate_button' onClick={showForm} ><span className='text-donate_button'>Открыть модалку</span></button>
    )

};

export default ButtonOpenPop;

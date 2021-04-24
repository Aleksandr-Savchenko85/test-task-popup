import React from 'react';

const ButtonClosePopup = ({ hideForm }) => {
    return (
        <>
            <div className='trigger'><span className='text-trigger'>100%</span></div>
            <button className='close_btn' onClick={hideForm}><span className='text-close_btn'>X</span></button>
        </>
    )
}

export default ButtonClosePopup;
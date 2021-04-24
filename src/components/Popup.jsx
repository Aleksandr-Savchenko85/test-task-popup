import React, { useState } from 'react';
import ButtonClosePopup from './ButtonClosePopup.jsx';
import Timer from './Timer.jsx';
import Select from './Select.jsx';
import Boxes from './Boxes.jsx';
import ButtonSend from './ButtonSend.jsx';
import PoliticInfo from './PoliticInfo.jsx';


const Popup = ({ isOpen, hideForm }) => {
    let money = 0;
    const [mon, setMon] = useState(money);

    let monay50 = () => {
        setMon(50)
    }
    let monay100 = () => {
        setMon(100)
    }
    let monay500 = () => {
        setMon(500)
    }

    if (!isOpen) {
        return null
    }

    return (

        <div className='pop_up'>
            <ButtonClosePopup
                hideForm={hideForm}
            />
            <Timer isOpen={isOpen} />
            <Select />
            <Boxes
                mon={mon}
                monay50={monay50}
                monay100={monay100}
                monay500={monay500}
            />
            <ButtonSend
                mon={mon}
            />
            <PoliticInfo />
        </div>
    )
}


export default Popup;
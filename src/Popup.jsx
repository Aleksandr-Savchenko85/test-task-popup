import React, { useState } from 'react';
import ButtonClosePopup from './ButtonClosePopup.jsx';
import Timer from './Timer.jsx';
import Select from './Select.jsx';
import Boxes from './Boxes.jsx';
import CounterTable from './CounterTable.jsx';
import ButtonSend from './ButtonSend.jsx';
import PoliticInfo from './PoliticInfo.jsx';


const Popup = ({ isOpen, hideForm }) => {

    if (!isOpen) {
        return null
    }
    return (
        <div className="pop_up">
            <ButtonClosePopup 
            hideForm={hideForm}
            />
            <Timer />
            <Select />
            <Boxes />
            <CounterTable />
            <ButtonSend />
            <PoliticInfo />

        </div>
    )
}


export default Popup;
import React from 'react';
import ButtonClosePopup from './ButtonClosePopup.jsx';
import Timer from './Timer.jsx';
import Select from './Select.jsx';
import Boxes from './Boxes.jsx';
import CounterTable from './CounterTable.jsx';
import ButtonSend from './ButtonSend.jsx';
import PoliticInfo from './PoliticInfo.jsx';




const Popup = () => {
    return (
        <div className="pop_up">
            <ButtonClosePopup />
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
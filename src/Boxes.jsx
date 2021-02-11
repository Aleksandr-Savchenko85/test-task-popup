import React, {useState} from 'react';

const Boxes = ({mon,monay50, monay100, monay500}) => {
    


    return (<>
        <span className="text_counter"> <span className="text-counter_green">$ {mon}</span> Будет зачислено вам на счет</span>
        <div className="group">
            <button className="box-1 box" onClick={monay50}>
                <p className="top_up">Пополнить на</p>
                <p className="money" id="mon">$50</p>
                <p className="receive">Получить</p>
                <p className="double_money">$100</p>
                {/* <input className="check" type="checkbox" />  */}

            </button>
            <button className="box-2 box" onClick={monay100}>
                <p className="top_up">Пополнить на</p>
                <p className="money">$100</p>
                <p className="receive">Получить</p>
                <p className="double_money">$200</p>
                {/*  <input className="check" type="checkbox" /> */}
            </button>
            <button className="box-3 box" onClick={monay500}>
                <p className="top_up">Пополнить на</p>
                <p className="money">$500</p>
                <p className="receive">Получить</p>
                <p className="double_money">$1000</p>
                {/*  <input className="check" type="checkbox" /> */}
            </button>
        </div>
    </>

    )
}


export default Boxes;
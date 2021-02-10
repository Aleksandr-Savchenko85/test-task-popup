import React from 'react';

const Boxes = () => {
    return (

        <div className="group">
            <div className="box-1">
                <p className="top_up">Пополнить на</p>
                <p className="money">$50</p>
                <p className="receive">Получить</p>
                <p className="double_money">$100</p>
                <input className="check" type="checkbox" />

            </div>
            <div className="box-2">
                <p className="top_up">Пополнить на</p>
                <p className="money">$100</p>
                <p className="receive">Получить</p>
                <p className="double_money">$200</p>
                <input className="check" type="checkbox" />
            </div>
            <div className="box-3">
                <p className="top_up">Пополнить на</p>
                <p className="money">$500</p>
                <p className="receive">Получить</p>
                <p className="double_money">$1000</p>
                <input className="check" type="checkbox" />
            </div>
        </div>

    )
}


export default Boxes;
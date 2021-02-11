import React from 'react';

const Boxes = () => {
    let style = {
        backgroundColor: "#44014C",
    }
    return (

        <div className="group">
            <button className="box-1 box">
                <p className="top_up">Пополнить на</p>
                <p className="money">$50</p>
                <p className="receive">Получить</p>
                <p className="double_money">$100</p>
                {/* <input className="check" type="checkbox" /> */}

            </button>
            <button className="box-2 box">
                <p className="top_up">Пополнить на</p>
                <p className="money">$100</p>
                <p className="receive">Получить</p>
                <p className="double_money">$200</p>
               {/*  <input className="check" type="checkbox" /> */}
            </button>
            <button className="box-3 box">
                <p className="top_up">Пополнить на</p>
                <p className="money">$500</p>
                <p className="receive">Получить</p>
                <p className="double_money">$1000</p>
               {/*  <input className="check" type="checkbox" /> */}
            </button>
        </div>

    )
}


export default Boxes;
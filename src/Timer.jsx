import React from 'react';

const Timer = () => {
    return (<>
        <div className="timer">

            <div className="countdown"><span className="countdown-number" id="time">00:00:00</span> </div>
        </div>
        <h1 className="text_dep">Увеличьте свой депозит!</h1>
    </>
    )
}


export default Timer;
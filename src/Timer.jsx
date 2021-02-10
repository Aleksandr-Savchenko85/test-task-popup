import React from 'react';

const Timer = () => {


    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            let hours = '0';
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
             hours = hours < 10 ? "0" + hours : hours;
             minutes = minutes < 10 ? "0" + minutes : minutes;
             seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = hours + ":" + minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    window.onload = function () {
        let sixteen = 60 * 16,
            display = document.querySelector('#time');
        startTimer(sixteen, display);
    };



    return (<>
        <div className="timer">

            <div className="countdown"><span className="countdown-number" id="time">00:00:00</span> </div>
        </div>
        <h1 className="text_dep">Увеличьте свой депозит!</h1>
    </>
    )
}


export default Timer;
import React, { useEffect, useState } from 'react';

const Timer = ({ isOpen }) => {
    const [timer, setTimer] = useState(0);
    const [time, setTime] = useState('');

    useEffect(() => {
        if (isOpen) {
            func()
        } else {
            clearTimer()
        }

    }, [isOpen])

    useEffect(() => {
        if (time == '00:00:00') {
            clearTimer()
        }

    }, [time])


    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;

        setTimer(setInterval(function () {
            let hours = '0';
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = hours + ':' + minutes + ':' + seconds;
            setTime(hours + ':' + minutes + ':' + seconds)

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000))

        if (parseInt(time.split(':')[1]) === 0) {
            clearTimer()
        }
    }

    let func = function () {
        let sixteen = 60 * 16,
            display = document.querySelector('#time');
        startTimer(sixteen, display);
    };

    let clearTimer = () => {
        setTimer(
            clearInterval(timer)
        )
    }

    return (<>
        <div className='timer'>
            <div className='countdown'>
                <span className='countdown-number' id='time'>00:00:00</span>
            </div>
        </div>
        <h1 className='text_dep'>Увеличьте свой депозит!</h1>
    </>
    )
}

export default Timer;

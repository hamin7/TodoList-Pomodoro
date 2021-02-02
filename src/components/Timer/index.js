import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as actions from '../../store/actions';
import './index.css';

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    time -= minutes * 60
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
        ? `0${seconds}`
        : seconds}`;
}

const Timer = ({
    // timerDuration,
    currentJob,
    addCount,
    error
}) => {
    const SHORT_BREAK = 5 * 60;
    const POMODORO = 25 * 60;
    const LONG_BREAK = 15 * 60;

    const [timerDuration, setTimerDuration] = useState(POMODORO);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(0);

    const addSecond = () => {
        if (time < timerDuration) {
            setTime(time + 1)
        } else {
            setIsPlaying(false);
        }
    }

    const startTimer = () => {
        setIsPlaying(true);
    };

    const pauseTimer = () => {
        setIsPlaying(false);
    };

    const restartTimer = () => {
        setIsPlaying(false);
        setTime(0);
    };

    const addCountAction = async () => {
        const res = await addCount(currentJob);
    }

    useEffect(() => {
        if (isPlaying) {
            const countdown = setInterval(() => {
                addSecond();
            }, 1000);
            return () => {
                clearInterval(countdown);
            }
        }

        if (time === timerDuration) {
            addCountAction();
            setTime(0);
        }
    }, [time, isPlaying]);

    const resetTimer = (time) => {
        setTimerDuration(time);
        setIsPlaying(false);
        setTime(0);
    }

    return (
        <div>
            <div className="Timer">
                <div className="ButtonBox">
                    <a className="TimeButton" onClick={() => resetTimer(SHORT_BREAK)}>SHORT Break</a>
                    <a className="TimeButton" onClick={() => resetTimer(POMODORO)}>POMODORO</a>
                    <a className="TimeButton" onClick={() => resetTimer(LONG_BREAK)}>LONG Break</a>
                </div>
                <div className="TimeBox">
                    <a className="Time">{formatTime(timerDuration - time)}</a>
                </div>
                <div className="ButtonBox">
                    {isPlaying ?
                        <a className="Button" onClick={pauseTimer}>Pause</a>
                        : <a className="Button" onClick={startTimer}>Start</a>
                    }
                    <a className="Button" onClick={restartTimer}>Reset</a>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = ({ todos }) => ({
    error: todos.error
});

const mapDispatchToProps = {
    addCount: actions.addCount,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);
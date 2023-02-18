import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useState, useContext, useEffect, useRef } from 'react';
import SettingsContext from "./SettingsContext"

const red = '#f54e4e'
const green = '#4aec8c'


export default function Timer() {

    const settingsInfo = useContext(SettingsContext)
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('work')
    const [secondsLeft, setSecondsLeft] = useState(0)

    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    function initTimer() {
        secondsLeftRef.current = settingsInfo.workMinutes * 60
        setSecondsLeft(secondsLeftRef.current)
    }

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work'
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
        
        setMode(nextMode)
        modeRef.current = nextMode

        setSecondsLeft(nextSeconds)
        secondsLeftRef.current = nextSeconds
    }

    function tick() {
        secondsLeftRef.current--
        setSecondsLeft(secondsLeftRef.current)
    }

    useEffect(() => {
        initTimer()

        const interval = setInterval(() => {
            if(isPausedRef.current) {
                return ;
            } if (secondsLeftRef.current === 0) {
                return switchMode()
            } else {
                tick()
            }
        }, 10)

        return () => clearInterval(interval) 

    }, [settingsInfo])

    const totalSeconds = mode === "work" 
        ? settingsInfo.workMinutes * 60 
        : settingsInfo.breakMinutes * 60
    const percentage = Math.round(secondsLeft / totalSeconds * 100) 

    const minutes = Math.floor(secondsLeft / 60)
    const seconds = secondsLeft % 60
    const formattedSeconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })

    return (
        <div>
            <CircularProgressbar 
                value={percentage} 
                text={`${minutes}:${formattedSeconds}`} 
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: mode === 'work' ? red : green,
                    trailColor: 'rgba(255, 255, 255, .2)'
                })}
            />
            <div className='mt-5'>
                {isPaused 
                    ? <PlayButton onClick={() => {
                        setIsPaused(false)
                        isPausedRef.current = false
                    }}/> 
                    : <PauseButton onClick={() => {
                        setIsPaused(true)
                        isPausedRef.current = true
                    }}/>}                
            </div>
            <div className='mt-5'>
                <SettingsButton onClick={() => settingsInfo.setShowSettings(true)}/>
            </div>
        </div>

    )
}
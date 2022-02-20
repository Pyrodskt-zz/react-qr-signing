import React, {useRef, useState} from 'react'
import  ReactDOM  from 'react';
import QrGen from "./QrGen";
export default function Inputs({classcode, period}) {
    const classcodeRef = useRef()
    const periodRef = useRef()
    const [ans, setAns] = useState({classcode: "", period: ""})
    function handleQR(){
        const classs = classcodeRef.current.value
        const perriod = periodRef.current.value
        setAns({classcode: classs, period: perriod})
        
    }   

    return (
        <div className='container'>
        <input type="text" className='input classcode' ref={classcodeRef}></input>
        <select name='period-input' className='period-input' ref={periodRef}>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
        </select>
        <button onClick={handleQR}>Create Session</button>
        <QrGen property={ans} />

        </div>
    )
}

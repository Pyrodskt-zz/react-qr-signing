import React, {useRef} from 'react'
import './Inputs.css'
export default function Form({ans, setAns}) {
    const classcodeRef = useRef()
    const periodRef = useRef()
    
    function handleQR(){
        const classs = classcodeRef.current.value
        const perriod = periodRef.current.value
        setAns({classcode: classs, period: perriod})
        
    }
  return (
    <>
      <div className='form'>
                        <select name='period-input' className='classcode-input' ref={classcodeRef}>
                            <option value="none">None</option>
                            <option value="CPI-A1">CPIA1</option>
                            <option value="CPI-A2">CPIA2</option>
                            <option value="CPI-A3">CPIA3</option>
                            <option value="CPI-A4">CPIA4</option>
                            <option value="CPI-A5">CPIA5</option>
                            <option value="EXIA-A1">EXIA-A1</option>
                            <option value="EXIA-A2">EXIA-A2</option>
                            <option value="EXIA-A3">EXIA-A3</option>

                        </select>
                        <select name='period-input' className='period-input' ref={periodRef}>
                            <option value="Morning">Morning</option>
                            <option value="Afternoon">Afternoon</option>
                        </select>
                        <button onClick={handleQR} className="create-session-btn">Create Session</button>
                        </div>
    </>
  )
}

import React, {useRef, useState} from 'react'
import  ReactDOM  from 'react';
import QrGen from "./QrGen";
import Form from './Form';
import './Inputs.css'
export default function Inputs({classcode, period}) {
    
    const [ans, setAns] = useState({classcode: "", period: ""})


    function showForm(){

        if (ans.classcode === "" || ans.period === "") return <Form ans={ans} setAns={setAns}/>
        
        }
       

    return (
        <div className='container'>
                
            
            
            {showForm()}
            <QrGen property={ans} />

        </div>
    )
}

import React, {useState} from 'react'
import QRCode from 'qrcode.react'
import Clock from 'react-live-clock'
import './QrGen.css'

export default function QrGen({ property }) {

    function getTime(){
      
      return <Clock format='HH:mm:ss' ticking="true" timezone='Europe/Paris' className='clock' />
    }

    function QRopener(){
      if(property.classcode === "") return
      const fun_url = "https://i.gifer.com/3dTY.gif"
      const url = 'http://192.168.1.43:5000/'
      const f_url = url + '?classcode=' + property.classcode + '&period=' + property.period + "/" 
      const container = <>
        <QRCode value={f_url} className='qr-code' renderAs='svg'/>
        <h1>classcode : {property.classcode}</h1>
        <h1>period : {property.period}</h1>
        <button className='stop-btn'>End session</button>
        </>
      return container 
    }
  return (
    <div className='container-qr'>
      {getTime()}
      {QRopener()}
    </div>
  )
}

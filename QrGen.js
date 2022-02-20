import React, {useState} from 'react'
import QRCode from 'qrcode.react'
import './QrGen.css'

export default function QrGen({ property }) {
    function QRopener(){
      if(property.classcode === "") return
      const url = 'http://192.168.1.43:5000/'
      const f_url = url + '?classcode=' + property.classcode + '&period=' + property.period + "/" 
      const container = <>
        <h1>classcode : {property.classcode}</h1>
        <h1>period : {property.period}</h1>
        <QRCode value={f_url} className='qr-code' renderAs='svg'/>
        </>
      return container 
    }
  return (
    <div className='container-qr'>
      {QRopener()}
    </div>
  )
}

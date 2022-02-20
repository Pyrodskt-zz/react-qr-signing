import React, {useState} from 'react'
import QRCode from 'qrcode.react'
import './QrGen.css'

export default function QrGen({ property }) {
    function QRopener(){
      if(property.classcode === "") return
      return <QRCode value="http://google.com/" className='qr-code' size='255' renderAs='svg'/>
    }
  return (
    <div className='container-qr'>
      <h1>classcode : {property.classcode}</h1>
      <h1>period : {property.period}</h1>
      {QRopener()}
    </div>
  )
}

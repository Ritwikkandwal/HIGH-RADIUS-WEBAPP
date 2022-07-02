import React from 'react'
import '../App.css';
import abclogo from '../images/Group 20399.svg';
import hrclogo from '../images/logo.svg';


function HeaderComponent() {
  return (
    <div>
     <div>
     <img src={abclogo} className="abcLogo" alt="abclogo" />
     <img src={hrclogo} className="hrcLogo" alt="logo" />
     <button onClick="window.location.reload();">Refresh Page</button>
     </div>
     <div className='invoiceList'>
         Invoice List
     </div>
    </div>
  )
}

export default HeaderComponent
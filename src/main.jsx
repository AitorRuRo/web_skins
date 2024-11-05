import React from 'react'
import ReactDOM from 'react-dom/client'
import { Español } from './Español.jsx'
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

var x = 0;
 
if(x == 0){
    root.render(
        <React.Fragment>
            <Español />
        </React.Fragment>
    )
}


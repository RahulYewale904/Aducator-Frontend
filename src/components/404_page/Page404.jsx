import React from 'react'
import './Page404.css'
import Image from '../assets/images/404.svg'

import {useHistory} from 'react-router-dom'


export default function Page404() {
    const history = useHistory()

    const Return = () => {
        history.push('/')
    }

    return (
        <div>
            <div className="p404_main">
                <div className="p404_wrapper">
               
                    <img src={Image} className='Image404' alt="Error" />
               
<div className="p404_word" onClick={Return}>
    <p uk-tooltip="Click to return...">You Come to a wrong place.</p>
    <p uk-tooltip="Click to return...">Return to Aducator.</p>
</div>
              
                </div>
            </div>
        </div>
    )
}

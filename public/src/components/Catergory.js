import React from 'react'
import './css/container.css'
import discount1 from './image/discount1.webp';
import discount2 from './image/discount2.webp';
import discount3 from './image/discount3.webp';
import discount4 from './image/discount4.webp';

import banneroffer from './image/banneroffer.gif';



export default function Catergory() {
    return (
        <div> 
        <div className="container">
            <div className="mainblock">
                <h1>Crackling Western Wear Discounts</h1>
            </div>

            <div className="wrapper">
                <img src={discount1}></img>

            </div>
            <div className="wrapper">
                <img src={discount2}></img>

            </div>
            <div className="wrapper">
                <img src={discount3}></img>
            </div>
            <div className="wrapper">
                <img src={discount4}></img>
            </div>
        </div>

        <img className="banneroffer" src={banneroffer}></img>
        </div>

    )
}

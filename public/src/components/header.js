import React from "react";
import "./css/style.css"
import cart from './image/cart.png';

export default function Header(){
    return (
       
        <div id="header">
        <div className="imgheader">
           <img src={cart} width="120px"/>
            </div>
            <div className="home">
                <a className="headerlink" href="#">Home</a>
            </div>
            <div className="category">
                <a className="headerlink" href="#">Category</a>
            </div>
            <div className="contact_us">
                <a className="headerlink" href="#">Contact Us</a>
            </div>
         </div>
       
    )
}




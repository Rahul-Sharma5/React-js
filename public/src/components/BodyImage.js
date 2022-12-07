import React from 'react'
import Shopping from './image/Shopping.jpg'
import "./css/style.css"


export default function BodyImage() {
  return (
          <div className='bodyimg'> 
         
         <div className='textoffer'>
          <p className='textwhite diwalitext'>Diwali Offer !!!</p>
          <p className='textwhite diwalisubtext'>Extra up to ₹500 cashback, Shop Now</p>
          </div>

          <div className='imgmain'>
          <img src={Shopping}/>
          </div>

       

          </div>
    
  )
}

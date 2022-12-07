import React from "react";

export default function Descriptiondata({ Description }) {
    return (
        <div>
        
            <div className="DescriptionContainer" >
                <div className='Bodycontainer'>
                    
                    <div>
                        <div className="DescriptionTitle">Description Title : {Description}</div>
                        <div className="Description">Description</div>
                    </div>
                    {/* <button className='btn'>Description view</button> */}
                </div>
            </div>
        </div>
    )
}
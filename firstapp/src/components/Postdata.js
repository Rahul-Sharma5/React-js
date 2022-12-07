import React from 'react'
import { Link } from 'react-router-dom'

export default function Postdata({postdata}) {
  return (
    <div>
      <div className="PostContainer" >
        <div className='titlecontainer'>
            <div>
            <div className="postTitle">Post Title : {postdata}</div>
            <div className="postDescription">Post Description</div>
            </div>
            <Link to='/description'><button className='btn'>Post view</button></Link>
        </div>
      </div>
    </div>
  )
}

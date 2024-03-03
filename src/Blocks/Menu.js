import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div style={{
      
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"10vh",
        
    }} >
        <Breadcrumb>
   
      <Breadcrumb.Item >
        
        <Link to = "/">
        Home
        </Link>


      </Breadcrumb.Item>



      <Breadcrumb.Item >
        
        <Link to = "/posts">
        posts
        </Link>


      </Breadcrumb.Item>
      <Breadcrumb.Item >
        
        <Link to = "/gallery">
        Gallery
        </Link>


      </Breadcrumb.Item>
      <Breadcrumb.Item >
        
        <Link to = "/events">
        Events
        </Link>


      </Breadcrumb.Item>

    </Breadcrumb>
    </div>
  )
}


const mystyle = {

    height:"auto",
    width:"auto",
    padding:"10px",
    backgroundColor:"green"
}


export default Menu
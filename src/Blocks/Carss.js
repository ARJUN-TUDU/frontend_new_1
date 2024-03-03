import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carss = () => {
  

  return (
    <Carousel>
    <Carousel.Item>
        
       <div style={mystyle}>
           
           <img src= {require("../images/image_1.jpg")} style = {{width:"100%",height:"100%",objectFit:"cover"}} />

       </div>
    </Carousel.Item>
    <Carousel.Item>
    <div style={mystyle}>

    <img src= {require("../images/image_1.jpg")} style = {{width:"100%",height:"100%",objectFit:"cover"}} />
       </div>
    </Carousel.Item>
    <Carousel.Item>
    <div style={mystyle}>
   
    <img src= {require("../images/image_1.jpg")} style = {{width:"100%",height:"100%",objectFit:"cover"}} />

    </div>
    </Carousel.Item>
  </Carousel>
  )
}

const mystyle = {
    width:"100%",
    height:"50vh",
    backgroundColor:"red"
}

export default Carss
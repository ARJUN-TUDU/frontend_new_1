import React from 'react'
import { Row,Col } from 'react-bootstrap';

const Posts = () => {
   

  const arr= [1,2,3,2,5,,6,7,7,8,53,45,44,52];

  return (

   <section style = {{

     display:"flex",
     justifyContent:"center",
     alignItems:"center",
     width:"100%"

   }}>


     <div className='scrollhide' style = {{
        
        overflowY:"scroll",
        overflowX:"hidden",
        height:"100vh",
        width:"500px",
        


    }} > 
       

        
        <ul> 
          <Row>
          {
            arr.map((x)=>{
                return <Col l={12} xl = {12} xs={12} >
                <div style = {{
          
                    width:"100%",
                    height:"100%",
                    backgroundColor:"cyan",
                    
                    

       }} >
       <img src = {require("../images/image_2.jpg")} style = {{height:"80%",width:"100%",objectFit:"cover"}} />
       </div>
       
                </Col>
          
            })
           }
          </Row>
        </ul>


    </div>
   </section>
  )
}

export default Posts
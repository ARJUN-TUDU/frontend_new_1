import React from 'react'
import Cards from '../component/Cards'
import { Row,Col } from 'react-bootstrap'
import {motion} from 'framer-motion'

const ListHeadings = () => {
  return (
   <section style={my_section_style} >
       
       <motion.div
       
       initial = {{scale:0.8}}
       animate = {{scale:1}}

       >
        
      <Row>

<Col xs={12} s={12}  xl={4} >
  
   
     
   <Cards/>


    
    </Col>
    <Col xs={12} s={12} xl={4} >

<Cards/>


</Col>
<Col xs={12} s={12} xl={4} >

<Cards/>


</Col>


  </Row>
       </motion.div>

   </section>
  )
}

const my_section_style ={
     
    height:"auto",
    
    marginTop:"50px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"

}

export default ListHeadings
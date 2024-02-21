import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom'
import axios from 'axios';
import {motion} from 'framer-motion'

const Order = () => {
    

   
    const [itemlist,setItemList] = useState([]);




    const {items} = useParams()
    let compare_array = [];
    for(const i of items){
        compare_array.push(parseInt(i));
    }




    const getData = async()=>{
              
        const list = await axios.get("https://fakestoreapi.com/products");
        console.log(list.data)

        list.data.map((x)=>{
             
             if(compare_array.includes(x.id)){

                setItemList((prev)=>{
                    return [...prev,x]
                })
             }
             

        })
    }

    const out = () => {
        console.log("hello")
    }
    
    useEffect(()=>{
       getData();
    },[])

 

    
    
  return (
    <div>
    <Link to ="/home">
    <button>go home</button>
</Link>
    
    <div style = {{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
    
  
               
    <div style = {{height:"400px",width:"800px",backgroundColor:"cyan"}}>
       
       {

        itemlist.map((x)=>{
            return <h1>{x.title}</h1>
        })
       }
      

    </div>

     <motion.div style={mystyle} 
      
      initial = {{x:-500}}
      animate = {{x:0}}

      whileHover={{scale:1.1}}
    >


    </motion.div>
 
 
 </div>
 </div>

  )
}



const mystyle = {
    height:"599px",
    width:"500px",
    backgroundColor:"cyan"
}




    



export default Order;
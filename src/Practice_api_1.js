import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'



const Practice_api_1 = () => {

    const [list,setList] = useState([]);
    const [cartlist,setCartList] = useState([]);
    const [amount,setAmount] = useState(0);

    
    const [clothes,setClothes] = useState([]);
    const [ring,setRing] = useState([]);
    const [gadgets,setGadgets] = useState([]);
    
    const [flag,setFlag] = useState(false);


    const [ans,setAns] = useState("");














   //adding element
    const increase = async(id) => {
        

        const list = await axios.get("https://fakestoreapi.com/products");
        const res = list.data.filter(x=> x.id === id);
        
        setAmount((prev)=>{
          return parseInt(prev+res[0].price+1);
        })

        setCartList((prev)=>{
            return [...prev,{...res[0]}];
        });
    }














  //clear
    const clear = () => {

        setCartList((prev)=>{
            return prev.splice(0,prev.length);
        })
        setAmount(0);
    }


    //clothes
    const getClothes = async () => {
       
      const list = await axios.get("https://fakestoreapi.com/products");
      const  all_data = list.data
      
      setFlag(true);
      all_data.map((x)=>{

        const name = x.title;
         
        if(name.includes("mens") || name.includes("womens") || name.includes("men") || name.includes("women")){
           
          setClothes((i)=>{
            return [...i,x];
          })

        }


      })

     
      

      clothes.map((x)=>{
        console.log(x);
      })

      setList(clothes)
      

    }



 //get ALL 

  const getAll = async () =>{

    const data = await axios.get("https://fakestoreapi.com/products");

    setList(data.data);
    console.log(data.data);


  }
 

  const order =async () => {


     let curr = "";

     cartlist.map((x)=>{
        
       curr = curr+x.id;

     })

     setAns(curr);

  }








    useEffect(()=>{

       const getData = async() =>{
          
        const data = await axios.get("https://fakestoreapi.com/products");
        
        setFlag(true)
        setList(data.data);

      
       }

       getData();

    },[])


  return (<>
    <div style = {{height:"80vh",display:"flex",justifyContent:"space-around",padding:"50px",margin:"50px"}}>
       
       < div>
            
            <button style = {{width:"100%"}}onClick={getAll}>
              
              all

            </button>
            <button style = {{width:"100%"}} onClick={getClothes}>
              
              clothes

            </button>
           


       </div>



       <motion.div style = {{height:"80vh",width:"30vw",overflowX:"hidden",overflowY:"scroll"}}
       
       initial = {{scale:0.5}}
       animate = {{scale:1}}
       
       >
           
          
          {flag?     <ul>
        {
        
        list.map((x)=>
        {
            return <li >
            
            <motion.div style = {{backgroundColor:"green",width:"auto",margin:"50px",borderRadius:"5px",padding:"5px"}} 
            
         
            
            >
           
            <img style = {{height:"300px",width:"100%",objectFit:"cover"}} src = {x.image}/>
            <h5 style ={{color:"white",marginLeft:"70px"}}>{x.title}</h5>
            <p></p>
            <button onClick={()=>increase(x.id)} style={{position:"relative",marginLeft:"0",height:"50px",width:"100%"}}>add</button>
           </motion.div>
            </li>
        })
        
        }
        </ul>:<h1>Loading ....</h1> }

   

       </motion.div>

        <motion.div  style = {{marginTop:"50px",marginLeft:"100px",width:"500px",padding:"0px",backgroundColor:"whitesmoke",overflowY:"scroll","&::WebkitScrollbar":{display:"none"}}}
        
        initial = {{y:500}}
        animate = {{y:0}}
        
        
        >
           <ul>
            {

              cartlist.map((x)=>{


                return <motion.div style={{width:"auto",height:"auto",padding:"50px" , backgroundColor:"cyan",margin:"10px"}} 
                
                initial = {{x:-100}}
                animate = {{x:0}}
                
                >{x.title}
               
                
                {x.count} </motion.div>
              })
            }
            </ul>

            <button onClick={order}>
             set orderlist
            </button>

            

           <Link to = {`/Orders/${ans}`}>
            <button>go to shopp</button>
           </Link>
           <button onClick={clear}>clear</button>


        </motion.div>
      

        <motion.div style = {{height:"200px",width:"200px",backgroundColor:"whitesmoke",borderRadius:"10px",marginTop:"50px",
         
         display:"flex",
         justifyContent:"center",
         alignItems:"center"
      
                       }} 

                       initial = {{scale:0.5}}
                       animate = {{scale:1}}
                       
                       
                       
                       
                       >
            
            {amount}



        </motion.div>
       
       
        </div>

        
       
        </>
        
        
        
        )}
      
            
            
            
          
            
            
          

export default Practice_api_1
          
            
            
            
            
            
          
            
            
            
            
            
          
          
            
          
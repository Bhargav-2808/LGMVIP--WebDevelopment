import React from "react";
import { useState,useEffect } from "react";



const Data = () => {
    const [users, setUsers] = useState([]);

    const url="https://reqres.in/api/users?page=1";
    
    useEffect(() => {
        
     loadusers();
    }, [])
    
    const loadusers = async ()=>{
        //console.log("before");
        const response = await fetch(url);
        const result= await response.json();
        console.log(result.data);
        setUsers(result.data);
    }
    
    
  
  return (
    <>
        <button onClick={loadusers} > getData</button>
        <ul>
            {
                users.map((data)=>(
                        <p>{data.email}</p>
                    ))
            }
        </ul> 
 
    </> 
  );
};

export default Data;

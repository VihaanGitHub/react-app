import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function Effect() {
    const [state,setState]=useState('');


    const [load,setLoad] = useState("");

    function GetData(){
        console.log("hello");
        setState("hello")
        
    }


    useLayoutEffect(()=>{
        GetData();
    },[load])
  return (
    <div>
      {state}
      <input type="text" name="" onChange={(e)=>{setLoad(e.target.value)}} id="" />
    </div>
  )
}

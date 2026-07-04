import React,{useReducer} from 'react'



function reducer(state,action){
    if(action.type=="onnamechange"){
        console.log(state);
        
     return {
        ...state,
        name:action.value
     }
        
    }

    else if(action.type=="ongradechange"){
         return {
        ...state,
        grade:action.value
     }
    
}
 else if(action.type=="onaddresschange"){
         return {
        ...state,
        address:action.value
    }
}
}

export default function Form() {
  const [state, dispatch ]= useReducer(reducer,{
    name:"Vihaan", //onnamechange
    grade:6,  //ongrade
    address:"" //onaddress
  })
  console.log(state);
  

  return (
    <div>
   {state.name} 
   <br />
   {state.grade}

   {state.address}




<input type="text"  onChange={(e)=>{
    dispatch({type:"onnamechange",value:e.target.value});
}}/>

<input type="number"  onChange={(e)=>{
    dispatch({type:"ongradechange",value:e.target.value});
}}/>

<input type="date"  onChange={(e)=>{
    dispatch({type:"onaddresschange",value:e.target.value});
}}/>

    </div>
  )
}

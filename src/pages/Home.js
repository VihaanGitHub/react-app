import React from 'react'
import { NavLink } from 'react-router'
import { Card } from '../components/Card'
import {data} from './products.js'

export default function Home() {
  function Bought(t) {
    console.log(1);

  }

  function Add(h){
    console.log(2)
  }



  return (
    <>
      Home

      <div style={{display:"flex",flexWrap:'wrap'}}>
        {data.map((item)=>{
        // console.log(item);
        
        return <Card
        key={item.id}
        title={item.title}
        OnBought={Bought}
        OnAdded={Add}

        price={"$ "+item.price}
        description={item.description}
jacketimg={item.image}
        // description={"Very amazing jacket. Super cheap. It is light amber. It will remove all of your life's problems."}
        // jacketimg={"https://cms.brnstc.de/product_images/2244x3072p/cpro/media/images/product/25/6/100292038215000_0_1750075860391.webp"} 

      />
      })}
      </div>
     

      <NavLink to='/about'>
        <p>
          About
        </p>
      </NavLink>
    </>

  )
}

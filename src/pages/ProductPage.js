import React from 'react'
import { Link, NavLink, useParams } from 'react-router'
import { Card } from '../components/Card'
import {data} from './products.js'

export default function ProductsPage() {
const params = useParams();
const currentPage = parseInt(params.page);
  var eachpage = 5;
console.log(params.page);

  function Bought(t) {
    console.log(1);

  }

  function Add(h){
    console.log(2)
  }

var noofproducts = data.length/eachpage; //5

//   var startindices = [0, 10, 20, 30, 40]
//   var endindeces = [10, 20, 30, 40, 50]
var pages=[];
for(let i=1;i<=noofproducts;i++){
    pages.push(i)
}
// console.log(pages);

var startIndex = (currentPage-1) * eachpage;
var products = data.slice(startIndex,startIndex+eachpage);

  return (
    <>
      Home

      <div style={{display:"flex",flexWrap:'wrap'}}>
        {products.map((item)=>{
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
     
     <div>
    
    <Link to={`/products/${currentPage-1 > 0 ? currentPage-1: 1}`}>Back</Link>
      

      {
        pages.map((item)=>(
            <Link key={item} style={{marginLeft:10,marginRight:10}} to={`/products/${item}`}>{item}</Link>
        ))
      }
      <Link to={`/products/${currentPage+1 < noofproducts ? currentPage+1: noofproducts }`}>Next</Link>
     </div>

      <NavLink to='/about'>
        <p>
          About
        </p>
      </NavLink>
    </>

  )
}

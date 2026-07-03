import React from 'react'
import { Link, NavLink, useParams } from 'react-router'
import { Card } from '../components/Card'
import {data} from './products.js'

export default function ProductDetails(){
     const params = useParams();
    const currentID = parseInt(params.id);
   const currentProduct = data.filter(itm => itm.id == currentID)[0]

    console.log(currentProduct);
    
    return (
   
    <div></div>
    )
}
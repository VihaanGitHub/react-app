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
   
    <div>
        <div style={{
        backgroundColor: "lightGray",
        width: "1000px",
        height: "600px",
        marginLeft: "30vw",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
        borderRadius: "10px",
    }}><p>{currentProduct.title}</p><img style={{
        height: "300px",
        borderRadius: "5px",
    }} src={currentProduct.image} />
    <p>{currentProduct.category}</p>
    <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.15)",
    }}>
    <p style={{
        fontWeight: "normal",
        fontSize: "25px",
    }}>{currentProduct.description}</p>
    </div>
    <div style={{
       backgroundColor: "rgba(0, 255, 0, 0.15)",
    }}>
    <p style={{
        textAlign: "left",
        color: "green",
        marginLeft: "20px",
        textDecoration: "line-through",
        marginBottom: "5px",
    }}>₹{currentProduct.mrp}</p>
    <p style={{
        textAlign: "left",
        color: "green",
        marginTop: "5px",
        marginLeft: "20px",
        marginBottom: "5px",
    }}>₹{currentProduct.price}</p>
    <p style={{
        textAlign: "left",
        color: "darkGreen",
        marginLeft: "20px",
        marginTop: "0px",
    }}
        >{currentProduct.discount}% off!</p>
        </div>
        <p>{currentProduct.rating} Stars, {currentProduct.reviewsCount} Reviews</p>
        <p>{currentProduct.shippingInfo.estimatedDelivery}</p>
    </div>
    </div>
    );
}
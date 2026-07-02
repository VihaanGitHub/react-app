import React from 'react'

 export const Card = ({title,OnBought, description, jacketimg, OnAdded, price})=> {
  return (
   <div

  style={{
    maxWidth: "350px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h1 style={{ margin: "0 0 10px", fontSize: "24px" }}>{title}</h1>

   <img 
   loading='lazy'
   style={{
    width:"100%",
    border: "none",
   }} src={jacketimg} />

  <p style={{ fontSize: "20px", fontWeight: "bold", color: "#28a745" }}>
    {price}
  </p>

  <p style={{ color: "#666", lineHeight: "1.5" }}>
    {description}
  </p>


  <div
    style={{
      display: "flex",
      gap: "10px",
      marginTop: "15px",
    }}
  >
    <button
    onClick={OnAdded}
      style={{
        flex: 1,
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        background: "#007bff",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Add
    </button>

    <button
    onClick={OnBought}
      style={{
        flex: 1,
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        background: "#28a745",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Buy
      
    </button>
  </div>
</div>
  )
}




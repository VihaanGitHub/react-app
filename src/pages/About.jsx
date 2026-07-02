import React from 'react'
import { NavLink, useParams } from "react-router";

export default function About() {
  
  return (
    <div>
      About
       <NavLink to='/'>
        <p>
          Home
        </p>
        </NavLink>
    </div>
  );
  
}

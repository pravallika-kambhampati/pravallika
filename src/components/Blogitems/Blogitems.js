import React, { Component } from 'react'
import './Blogitems.css';

export default class Blogitems extends Component {
  render() {
    return (

       <div>
        <div class="font-styles post" style={{paddingTop:"25px"}}>
         <p>Aug 29, 2020</p>
         <span class="font-styles">Learning the great “Gatsby JS” - a tutorial for beginners — Part I</span>
       </div>
       <div class="font-styles post">
         <p>May 11, 2020</p>
         <span class="font-styles">How quarantining and self-isolation can actually do you good ?</span>
       </div>
       <div class="font-styles post" style={{ paddingLeft:"95px"}}>
         <p>Apr 9, 2020</p>
         <span class="font-styles">Flask for (absolute) Beginners!</span>
       </div>
       
       </div> 
      
      
    )
  }
}

import React, { Component } from 'react'
import Martian from './M.jfif'
import AnnaKarenina from './AK.jpg'
import BDC from './bdc.jpg'
import './Books.css'


export default class Books extends Component {


  render() {
    return (
      <div>
        <div className='heading'  >Learning and Reading</div>
        <div className='bodypart_books'> Between the Lines: A Peek into My Current Reads</div>
       
        <div style={{display: 'flex', paddingLeft: '251px'}}>

          
          <div>
          <img src={Martian} alt='Martian by Andy Weir' style={{width: '114px', height: '180px', marginRight:'20px'}}/>
          </div>

          
          <img src={AnnaKarenina} alt='Anna Karenina' style={{width: '114px', height: '180px', marginRight:'20px' }}/>
          <img src={BDC} alt='The Banglore Detectives Club' style={{width: '114px', height: '180px', marginRight:'20px' }}/>
        </div>
        
      </div>
    )
  }
}
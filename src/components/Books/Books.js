import React, { Component } from 'react'
import Martian from './M.jfif'
import AnnaKarenina from './AK.jpg'
import BDC from './bdc.jpg'
import MenWithoutWomen from './MWW.jpg'
import CryinginHMart from './CIHM.jpg'
import EatingTheSun from './ETS.jpg'
import IWantToDie from './IwanttoDie.jpg'
import Bird from './Bird.jpg'
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
          <img src={CryinginHMart} alt='Crying in H Mart' style={{width: '114px', height: '180px', marginRight:'20px'}}/>

        </div>
        <div className='bodypart_books'> Cover to Cover: Books Devoured in 2023</div>
        <div style={{display: 'flex', paddingLeft: '251px'}}>

          
        <div>
          <img src={MenWithoutWomen} alt='Men Without Women' style={{width: '114px', height: '180px', marginRight:'20px'}}/>   
        </div> 
        <img src={EatingTheSun} alt='Eating The Sun' style={{width: '114px', height: '180px', marginRight:'20px' }}/>
        <img src={BDC} alt='The Banglore Detectives Club' style={{width: '114px', height: '180px', marginRight:'20px'}}/>

        </div>
        <div className='bodypart_books'> Pages To Be Turned: Books On Deck </div>
        <div style={{display: 'flex', paddingLeft: '251px'}}>

          
        <div>
          <img src={AnnaKarenina} alt='Anna Karenina' style={{width: '114px', height: '180px', marginRight:'20px'}}/>   
        </div> 
        <img src={IWantToDie} alt='I want to die...' style={{width: '114px', height: '180px', marginRight:'20px' }}/>
        <img src={Bird} alt='The Wind-up Bird Chronicle' style={{width: '114px', height: '180px', marginRight:'20px' }}/>
      

</div>
        
      </div>
    )
  }
}